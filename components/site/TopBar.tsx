const PHONE = "+91 76089 23069";

export function TopBar() {
  return (
    <div className="hidden border-b border-hairline md:block">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-2 text-[13px] text-muted">
        <span>Bomikhal, Bhubaneswar, Odisha</span>
        <a
          href={`tel:${PHONE.replace(/\s+/g, "")}`}
          className="transition-colors hover:text-caramel"
        >
          {PHONE}
        </a>
      </div>
    </div>
  );
}
