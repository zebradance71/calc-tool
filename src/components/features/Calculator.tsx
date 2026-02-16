import { formatNumber, type Unit } from "@/lib/utils";

/* 計測箇所を図で表示：四角形（縦・横）*/
function RectDiagram() {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-semibold text-zinc-600">この部分を計測</p>
      <svg width="200" height="175" viewBox="0 0 200 175" className="shrink-0" aria-hidden>
        <rect x="40" y="30" width="100" height="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" rx="4" />
        <line x1="40" y1="138" x2="140" y2="138" stroke="#0ea5e9" strokeWidth="2" />
        <path d="M40 138 L45 133 M40 138 L45 143" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <path d="M140 138 L135 133 M140 138 L135 143" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x="75" y="121" width="30" height="18" rx="4" fill="#0ea5e9" />
        <text x="90" y="133" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">横</text>
        <line x1="155" y1="30" x2="155" y2="110" stroke="#ca8a04" strokeWidth="2" />
        <path d="M155 30 L150 35 M155 30 L160 35" stroke="#ca8a04" strokeWidth="2" fill="none" />
        <path d="M155 110 L150 105 M155 110 L160 105" stroke="#ca8a04" strokeWidth="2" fill="none" />
        <rect x="162" y="62" width="28" height="18" rx="4" fill="#ca8a04" />
        <text x="176" y="74" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">縦</text>
      </svg>
      <figcaption className="text-center text-xs text-zinc-500">縦＝高さ / 横＝幅</figcaption>
    </figure>
  );
}

function HexDiagram() {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-semibold text-zinc-600">この部分を計測</p>
      <svg width="200" height="200" viewBox="0 0 200 200" className="shrink-0" aria-hidden>
        <path
          d="M100 22 L158 52 L158 108 L100 138 L42 108 L42 52 Z"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="2.5"
        />
        <line x1="42" y1="150" x2="158" y2="150" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="6 4" />
        <path d="M42 150 L47 145 M42 150 L47 155" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <path d="M158 150 L153 145 M158 150 L153 155" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x="72" y="158" width="56" height="20" rx="4" fill="#0ea5e9" />
        <text x="100" y="172" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">対辺距離</text>
        <line x1="100" y1="22" x2="158" y2="52" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
        <rect x="162" y="32" width="28" height="18" rx="4" fill="#b45309" />
        <text x="176" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">一辺</text>
      </svg>
      <figcaption className="text-center text-xs text-zinc-500">対辺距離＝向かい合う辺の間 / 一辺＝1本の辺の長さ</figcaption>
    </figure>
  );
}

function CircleDiagram() {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-semibold text-zinc-600">同じ面積の円の直径</p>
      <svg width="200" height="120" viewBox="0 0 200 120" className="shrink-0" aria-hidden>
        <circle cx="100" cy="60" r="45" fill="#d1fae5" stroke="#059669" strokeWidth="2.5" />
        <line x1="55" y1="60" x2="145" y2="60" stroke="#0ea5e9" strokeWidth="2.5" />
        <path d="M55 60 L50 55 M55 60 L50 65" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <path d="M145 60 L150 55 M145 60 L150 65" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x="82" y="72" width="36" height="20" rx="4" fill="#0ea5e9" />
        <text x="100" y="86" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">直径</text>
      </svg>
      <figcaption className="text-center text-xs text-zinc-500">円の中心を通るまっすぐの長さ</figcaption>
    </figure>
  );
}

interface CalculatorProps {
  unit: Unit;
  setUnit: (unit: Unit) => void;
  rectWidth: string;
  setRectWidth: (value: string) => void;
  rectHeight: string;
  setRectHeight: (value: string) => void;
  hexSide: string;
  setHexSide: (value: string) => void;
  hexFlat: string;
  setHexFlat: (value: string) => void;
  rectDiameter: number | null;
  hexDiameter: number | null;
}

export function Calculator({
  unit,
  setUnit,
  rectWidth,
  setRectWidth,
  rectHeight,
  setRectHeight,
  hexSide,
  setHexSide,
  hexFlat,
  setHexFlat,
  rectDiameter,
  hexDiameter,
}: CalculatorProps) {
  const materialUnitLabel = unit === "mm" ? "mm" : "cm（換算: mm）";

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.9fr]">
      <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-sm font-semibold text-zinc-900">
            入力（四角形・正六角形）
          </h2>
          <div className="flex items-center gap-2 text-[11px] text-zinc-600">
            <span>単位:</span>
            <div className="inline-flex rounded-full border border-zinc-300 bg-white p-0.5 shadow-sm">
              <button
                type="button"
                className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                  unit === "mm" ? "bg-sky-600 text-white" : "text-zinc-600"
                }`}
                onClick={() => setUnit("mm")}
              >
                mm
              </button>
              <button
                type="button"
                className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${
                  unit === "cm" ? "bg-sky-600 text-white" : "text-zinc-600"
                }`}
                onClick={() => setUnit("cm")}
              >
                cm
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-100 text-sky-700">
                ■
              </div>
              <p className="text-xs font-semibold text-zinc-900">四角形</p>
            </div>
            <RectDiagram />
            <div className="space-y-2">
              <label className="block text-[11px] font-medium text-zinc-700">
                縦 ({materialUnitLabel})
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={rectHeight}
                onChange={(e) => setRectHeight(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[11px] font-medium text-zinc-700">
                横 ({materialUnitLabel})
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={rectWidth}
                onChange={(e) => setRectWidth(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
              />
            </div>
          </div>

          <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center text-amber-600">
                ⬡
              </div>
              <p className="text-xs font-semibold text-zinc-900">正六角形</p>
            </div>
            <HexDiagram />
            <div className="space-y-2">
              <label className="block text-[11px] font-medium text-zinc-700">
                対辺距離 ({materialUnitLabel})
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={hexFlat}
                onChange={(e) => setHexFlat(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-[11px] font-medium text-zinc-700">
                一辺の長さ ({materialUnitLabel})
              </label>
              <input
                type="number"
                inputMode="decimal"
                value={hexSide}
                onChange={(e) => setHexSide(e.target.value)}
                className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
              />
              <p className="text-[10px] text-zinc-500">
                ※ 一辺と対辺距離の両方入力時は一辺を優先
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
        <h2 className="text-sm font-semibold text-zinc-900">
          出力（同じ面積の円の直径）
        </h2>
        <CircleDiagram />
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              ●
            </div>
            <p className="text-xs font-semibold text-zinc-900">
              四角形 → 円の直径
            </p>
          </div>
          <p className="text-2xl font-semibold tracking-tight text-emerald-700">
            {formatNumber(rectDiameter)}
            <span className="ml-1 text-sm font-medium text-zinc-600">mm</span>
          </p>
        </div>
        <div className="h-px w-full bg-zinc-300" />
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              ●
            </div>
            <p className="text-xs font-semibold text-zinc-900">
              正六角形 → 円の直径
            </p>
          </div>
          <p className="text-2xl font-semibold tracking-tight text-amber-700">
            {formatNumber(hexDiameter)}
            <span className="ml-1 text-sm font-medium text-zinc-600">mm</span>
          </p>
        </div>
      </div>
    </section>
  );
}
