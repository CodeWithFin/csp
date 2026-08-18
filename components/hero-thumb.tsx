export function HeroThumb() {
  return (
    <div className="flex h-20 w-32 shrink-0 flex-col justify-between overflow-hidden rounded-xl bg-ink p-3 md:h-28 md:w-40">
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-live" />
        <span className="text-[10px] uppercase tracking-wider text-white/70">Safaricom</span>
      </div>
      <div>
        <p className="font-display text-sm font-medium tracking-tight text-white md:text-base">VOTE 1</p>
        <p className="text-[10px] text-live">Delivered</p>
      </div>
    </div>
  );
}
