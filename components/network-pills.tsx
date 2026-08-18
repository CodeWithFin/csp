export function NetworkPills({ compact = false }: { compact?: boolean }) {
  const networks = [
    { name: "Safaricom", status: "registered" },
    { name: "Airtel", status: "connected" },
    { name: "Telkom", status: "connected" },
  ];

  return (
    <div className={`flex flex-wrap ${compact ? "gap-2" : "gap-3"}`}>
      {networks.map((n) => (
        <div
          key={n.name}
          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-xs text-ink"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-dot absolute inline-flex h-full w-full rounded-full bg-live" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          <span className="font-medium">{n.name}</span>
          <span className="text-muted capitalize">{n.status}</span>
        </div>
      ))}
    </div>
  );
}
