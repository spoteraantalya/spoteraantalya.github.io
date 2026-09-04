'use client';

export function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event('spotera:open-cookie-settings'))}
      className="underline decoration-white/25 underline-offset-4 hover:text-white"
    >
      Çerez tercihleri
    </button>
  );
}
