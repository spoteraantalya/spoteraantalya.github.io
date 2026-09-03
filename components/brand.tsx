import { cn } from '@/lib/utils';

export function Brand({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)} aria-label="SpotEra">
      <svg aria-hidden="true" className="size-9 shrink-0" viewBox="0 0 44 44" fill="none">
        <rect width="44" height="44" rx="13" fill={inverted ? '#C9FF55' : '#2452FF'} />
        <path
          d="M12.5 16.25C12.5 13.9 14.4 12 16.75 12h12.5c1.24 0 2.25 1.01 2.25 2.25v3.5c0 1.24-1.01 2.25-2.25 2.25H18.5"
          stroke={inverted ? '#10130F' : 'white'}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M31.5 27.75c0 2.35-1.9 4.25-4.25 4.25h-12.5a2.25 2.25 0 0 1-2.25-2.25v-3.5c0-1.24 1.01-2.25 2.25-2.25H25.5"
          stroke={inverted ? '#10130F' : 'white'}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
      <span className={cn('text-[1.35rem] font-bold tracking-[-0.055em]', inverted ? 'text-white' : 'text-[#11150f]')}>
        Spot<span className={inverted ? 'text-[#C9FF55]' : 'text-[#2452FF]'}>Era</span>
      </span>
    </span>
  );
}
