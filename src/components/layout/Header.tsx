export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 via-rose-500 to-amber-500 text-xs font-semibold text-white shadow-sm">
            SC
          </div>
          <span className="text-sm font-semibold tracking-wide text-zinc-900">
            Shape Circle Converter
          </span>
        </div>
        <a
          href="#pdf"
          className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-3 py-1.5 text-xs font-semibold text-white hover:bg-zinc-700"
        >
          PDF出力
        </a>
      </div>
    </header>
  );
}
