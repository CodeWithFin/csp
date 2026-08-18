export function SectionLabel({
  label,
  dark = false,
  widthClass = "w-28",
}: {
  label: string;
  dark?: boolean;
  widthClass?: string;
}) {
  const border = dark ? "border-dim" : "border-line";
  const line = dark ? "bg-dim" : "bg-line";
  const text = dark ? "text-white" : "text-ink";

  return (
    <div className="mb-14 flex items-center gap-4 md:mb-16">
      <div className={`overflow-hidden rounded-full border px-4 py-1.5 ${border} ${widthClass}`}>
        <div className="animate-label flex w-[200%]">
          <span className={`w-full shrink-0 text-center text-xs font-medium uppercase tracking-wider ${text}`}>
            {label}
          </span>
          <span className={`w-full shrink-0 text-center text-xs font-medium uppercase tracking-wider ${text}`}>
            {label}
          </span>
        </div>
      </div>
      <div className={`h-px flex-grow ${line}`} />
    </div>
  );
}
