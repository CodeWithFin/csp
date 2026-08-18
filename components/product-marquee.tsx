import type { ReactNode } from "react";

function Card({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-56 w-72 shrink-0 flex-col overflow-hidden rounded-xl border border-line bg-white md:h-60 md:w-80">
      <div className="flex items-center justify-between border-b border-line px-4 py-2 text-[11px] uppercase tracking-wider text-muted">
        <span>{title}</span>
        <span className="text-live">live</span>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}

export function ProductMarquee() {
  const cards = (
    <div className="flex gap-6 px-3">
      <Card title="Bulk SMS">
        <div className="font-display text-3xl tracking-tighter text-ink">12,480</div>
        <p className="mt-1 text-xs text-muted">queued · smart routing</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-wash">
          <div className="h-full w-4/5 rounded-full bg-ink" />
        </div>
        <p className="mt-3 text-xs text-body">Safaricom 72% · Airtel 19% · Telkom 9%</p>
      </Card>
      <Card title="USSD session">
        <div className="space-y-1 font-mono text-xs text-ink">
          <p>CON Welcome to Acme</p>
          <p>1. Pay</p>
          <p>2. Balance</p>
          <p>3. Support</p>
        </div>
        <p className="mt-4 text-xs text-muted">No internet required</p>
      </Card>
      <Card title="WhatsApp">
        <div className="space-y-2">
          <div className="max-w-[90%] rounded-2xl bg-wash px-3 py-2 text-xs text-ink">
            Your parcel is out for delivery. Reply 1 for a call.
          </div>
          <div className="ml-auto max-w-[70%] rounded-2xl bg-ink px-3 py-2 text-xs text-white">1</div>
        </div>
      </Card>
      <Card title="Shortcode">
        <div className="font-display text-4xl tracking-tighter text-ink">40XXX</div>
        <p className="mt-2 text-xs text-body">Keyword: JOIN · auto-reply on</p>
        <p className="mt-4 text-xs text-live">Sender ID · SISCOM · registered</p>
      </Card>
      <Card title="M-Pesa STK">
        <div className="rounded-lg border border-line p-3">
          <p className="text-xs text-muted">Pay Acme Ltd</p>
          <p className="font-display mt-1 text-2xl tracking-tighter text-ink">KES 1,500</p>
        </div>
        <p className="mt-3 text-xs text-body">Prompt sent · awaiting PIN</p>
      </Card>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <div className="animate-marquee flex w-max">
        {cards}
        {cards}
      </div>
    </div>
  );
}
