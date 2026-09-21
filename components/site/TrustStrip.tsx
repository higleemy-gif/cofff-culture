const ITEMS = [
  "Industry-oriented curriculum",
  "Practical, hands-on training",
  "Rooted in Odisha",
] as const;

export function TrustStrip() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-content px-6 py-6">
        <ul className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-center md:gap-0">
          {ITEMS.map((item, index) => (
            <li key={item} className="flex items-center md:contents">
              <span className="text-[14px] font-medium uppercase tracking-strip text-muted">
                {item}
              </span>
              {index < ITEMS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="mx-4 hidden text-muted md:inline"
                >
                  &bull;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
