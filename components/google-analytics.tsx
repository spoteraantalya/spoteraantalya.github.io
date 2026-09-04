'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const consentStorageKey = 'spotera-cookie-consent-v1';

type ConsentChoice = 'accepted' | 'rejected';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function setConsentState(state: 'granted' | 'denied') {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('consent', 'update', {
    ad_storage: state,
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: state,
  });
}

function loadAnalytics(measurementId: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  setConsentState('granted');

  if (!document.querySelector(`script[data-spotera-ga="${measurementId}"]`)) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.spoteraGa = measurementId;
    document.head.appendChild(script);
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
  });
}

function clearAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name?.startsWith('_ga')) return;
    document.cookie = `${name}=; Max-Age=0; path=/`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}`;
  });
}

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    if (!measurementId) return;

    const savedChoice = window.localStorage.getItem(consentStorageKey) as ConsentChoice | null;
    const stateTimer = window.setTimeout(() => setChoice(savedChoice), 0);
    if (savedChoice === 'accepted') loadAnalytics(measurementId);

    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener('spotera:open-cookie-settings', openPreferences);
    return () => {
      window.clearTimeout(stateTimer);
      window.removeEventListener('spotera:open-cookie-settings', openPreferences);
    };
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId) return;

    const trackContactClick = (event: MouseEvent) => {
      if (choice !== 'accepted' || !window.gtag) return;
      const target = event.target instanceof Element ? event.target.closest('a') : null;
      const href = target?.getAttribute('href') || '';
      const contactMethod = href.startsWith('tel:') ? 'phone' : href.includes('wa.me') ? 'whatsapp' : null;
      if (!contactMethod) return;

      window.gtag('event', 'generate_lead', {
        contact_method: contactMethod,
        page_location: window.location.href,
      });
    };

    document.addEventListener('click', trackContactClick);
    return () => document.removeEventListener('click', trackContactClick);
  }, [choice, measurementId]);

  if (!measurementId || (choice && !preferencesOpen)) return null;

  const saveChoice = (nextChoice: ConsentChoice) => {
    window.localStorage.setItem(consentStorageKey, nextChoice);
    setChoice(nextChoice);
    setPreferencesOpen(false);

    if (nextChoice === 'accepted') {
      loadAnalytics(measurementId);
      return;
    }

    setConsentState('denied');
    clearAnalyticsCookies();
  };

  return (
    <section
      aria-label="Çerez tercihleri"
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-[24px] border border-black/10 bg-[#10130f] p-5 text-white shadow-2xl sm:bottom-6 sm:p-6"
    >
      <p className="text-base font-bold tracking-[-.02em]">Analiz ve reklam ölçümü tercihiniz</p>
      <p className="mt-2 text-sm leading-6 text-white/68">
        Sitenin kullanımını ve reklam dönüşümlerini ölçmek için Google Analytics ile Google Ads kullanmak istiyoruz. Kabul etmezseniz ölçüm etiketi yüklenmez; kişiselleştirilmiş reklam izni verilmez.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => saveChoice('accepted')}
          className="rounded-full bg-[#C9FF55] px-5 py-3 text-sm font-bold text-[#10130f]"
        >
          Kabul et
        </button>
        <button
          type="button"
          onClick={() => saveChoice('rejected')}
          className="rounded-full border border-white/24 px-5 py-3 text-sm font-bold text-white"
        >
          Reddet
        </button>
        <Link href="/gizlilik-ve-kvkk" className="text-sm text-white/72 underline underline-offset-4">
          Ayrıntıları incele
        </Link>
      </div>
    </section>
  );
}
