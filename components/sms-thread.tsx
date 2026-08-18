export function SmsThread() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-line bg-white p-4 shadow-[0_0_0_1px_rgba(12,17,0,0.02)]">
      <div className="mb-3 flex items-center justify-between border-b border-line pb-3">
        <div className="text-xs font-medium uppercase tracking-wider text-ink">Keyword flow</div>
        <div className="font-display text-xs tracking-tight text-muted">40XXX · SISCOM</div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-sm text-white">
          VOTE 1
        </div>
        <div className="max-w-[90%] self-start rounded-2xl rounded-bl-sm bg-wash px-3 py-2 text-sm text-ink">
          Thanks. Your vote for candidate 1 is in. Reply STOP to leave this list.
        </div>
        <div className="flex items-center gap-2 text-[11px] text-live">
          <span className="h-1.5 w-1.5 rounded-full bg-live" />
          Delivered · Safaricom · logged to webhook
        </div>
      </div>
    </div>
  );
}
