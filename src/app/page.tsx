"use client";

import { useMemo, useState } from "react";

type Unit = "mm" | "cm";

const PI = Math.PI;
const SQRT3 = Math.sqrt(3);

function formatNumber(value: number | null, digits = 2) {
  if (value == null || Number.isNaN(value) || !Number.isFinite(value)) return "-";
  return value.toFixed(digits);
}

function shapeAreaFromRectangle(width: number, height: number, unit: Unit) {
  const factor = unit === "cm" ? 10 : 1;
  const w = width * factor;
  const h = height * factor;
  if (w <= 0 || h <= 0) return null;
  return w * h;
}

function shapeAreaFromHexagon({
  side,
  flatToFlat,
  unit,
}: {
  side: number;
  flatToFlat: number;
  unit: Unit;
}) {
  const factor = unit === "cm" ? 10 : 1;
  let aMm: number | null = null;
  if (side > 0) {
    aMm = side * factor;
  } else if (flatToFlat > 0) {
    aMm = (flatToFlat * factor) / SQRT3;
  }
  if (!aMm || aMm <= 0) return null;
  return (3 * SQRT3 * aMm * aMm) / 2;
}

function equivalentCircleDiameter(areaMm2: number | null) {
  if (!areaMm2 || areaMm2 <= 0) return null;
  return Math.sqrt(areaMm2 / PI) * 2;
}

/* 計測箇所を図で表示：四角形（縦・横）— 寸法線・矢印・ラベルを明確に */
function RectDiagram() {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-semibold text-zinc-600">この部分を計測</p>
      <svg width="200" height="175" viewBox="0 0 200 175" className="shrink-0" aria-hidden>
        {/* 四角形 */}
        <rect x="40" y="30" width="100" height="80" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2.5" rx="4" />
        {/* 横：四角のさらに下に寸法線（被らないよう余裕を持たせる） */}
        <line x1="40" y1="138" x2="140" y2="138" stroke="#0ea5e9" strokeWidth="2" />
        <path d="M40 138 L45 133 M40 138 L45 143" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <path d="M140 138 L135 133 M140 138 L135 143" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x="75" y="115" width="30" height="18" rx="4" fill="#0ea5e9" />
        <text x="90" y="127" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">横</text>
        {/* 縦：右側に寸法線 */}
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

/* 計測箇所を図で表示：正六角形（対辺距離・一辺）— どちらを測るか明確に */
function HexDiagram() {
  return (
    <figure className="flex flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
      <p className="text-xs font-semibold text-zinc-600">この部分を計測</p>
      <svg width="200" height="175" viewBox="0 0 200 175" className="shrink-0" aria-hidden>
        {/* 正六角形 */}
        <path
          d="M100 22 L158 52 L158 108 L100 138 L42 108 L42 52 Z"
          fill="#fef3c7"
          stroke="#d97706"
          strokeWidth="2.5"
        />
        {/* 対辺距離：六角形（下端y=138）の下に寸法線を引き、ラベルを寸法線の真下中央に配置 */}
        <line x1="42" y1="80" x2="158" y2="80" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="6 4" />
        <path d="M42 80 L47 75 M42 80 L47 85" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <path d="M158 80 L153 75 M158 80 L153 85" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        <rect x="72" y="86" width="56" height="20" rx="4" fill="#0ea5e9" />
        <text x="100" y="100" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">対辺距離</text>
        {/* 一辺：右上の辺を太線で強調。ラベルは辺の外側（右上）に配置して被らないように */}
        <line x1="100" y1="22" x2="158" y2="52" stroke="#b45309" strokeWidth="4" strokeLinecap="round" />
        <rect x="162" y="32" width="28" height="18" rx="4" fill="#b45309" />
        <text x="176" y="44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">一辺</text>
      </svg>
      <figcaption className="text-center text-xs text-zinc-500">対辺距離＝向かい合う辺の間 / 一辺＝1本の辺の長さ</figcaption>
    </figure>
  );
}

/* 計測箇所を図で表示：円（直径）— 直径をはっきり表示 */
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

export default function Page() {
  const [unit, setUnit] = useState<Unit>("mm");
  const [rectWidth, setRectWidth] = useState<string>("");
  const [rectHeight, setRectHeight] = useState<string>("");
  const [hexSide, setHexSide] = useState<string>("");
  const [hexFlat, setHexFlat] = useState<string>("");

  const rectArea = useMemo(
    () =>
      shapeAreaFromRectangle(
        parseFloat(rectWidth.replace(",", ".")),
        parseFloat(rectHeight.replace(",", ".")),
        unit
      ),
    [rectWidth, rectHeight, unit]
  );
  const hexArea = useMemo(
    () =>
      shapeAreaFromHexagon({
        side: parseFloat(hexSide.replace(",", ".")),
        flatToFlat: parseFloat(hexFlat.replace(",", ".")),
        unit,
      }),
    [hexSide, hexFlat, unit]
  );
  const rectDiameter = useMemo(() => equivalentCircleDiameter(rectArea ?? null), [rectArea]);
  const hexDiameter = useMemo(() => equivalentCircleDiameter(hexArea ?? null), [hexArea]);

  const materialUnitLabel = unit === "mm" ? "mm" : "cm（換算: mm）";
  const diameterForLinkRounded =
    rectDiameter != null && Number.isFinite(rectDiameter)
      ? Math.round(rectDiameter)
      : hexDiameter != null && Number.isFinite(hexDiameter)
        ? Math.round(hexDiameter)
        : null;
  const amazonUrl =
    diameterForLinkRounded != null
      ? `https://www.amazon.co.jp/s?k=${encodeURIComponent(`丸棒 ${diameterForLinkRounded}mm`)}&tag=YOUR_AMAZON_AFFILIATE_TAG`
      : null;
  const monotaroUrl =
    diameterForLinkRounded != null
      ? `https://www.monotaro.com/s/?c=&q=${encodeURIComponent(`丸棒 ${diameterForLinkRounded}mm`)}`
      : null;

  const handlePrint = () => {
    if (typeof window === "undefined") return;
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <section className="mb-10 space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Shape Circle Converter
          </p>
          <h1 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
            四角形・正六角形と同じ面積を持つ{" "}
            <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              円の直径
            </span>
            をリアルタイムで計算。
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
            設計や材料手配のときに、「この四角形（あるいは六角形）と同じ面積の丸棒／円盤の直径が知りたい」という場面向けのツールです。計測箇所を図で示しています。
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.9fr]">
          <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-zinc-900">入力（四角形・正六角形）</h2>
              <div className="flex items-center gap-2 text-[11px] text-zinc-600">
                <span>単位:</span>
                <div className="inline-flex rounded-full border border-zinc-300 bg-white p-0.5 shadow-sm">
                  <button
                    type="button"
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${unit === "mm" ? "bg-sky-600 text-white" : "text-zinc-600"}`}
                    onClick={() => setUnit("mm")}
                  >
                    mm
                  </button>
                  <button
                    type="button"
                    className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${unit === "cm" ? "bg-sky-600 text-white" : "text-zinc-600"}`}
                    onClick={() => setUnit("cm")}
                  >
                    cm
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-100 text-sky-700">■</div>
                    <p className="text-xs font-semibold text-zinc-900">四角形</p>
                  </div>
                </div>
                <RectDiagram />
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-zinc-700">縦 ({materialUnitLabel})</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={rectHeight}
                    onChange={(e) => setRectHeight(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-zinc-700">横 ({materialUnitLabel})</label>
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
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center text-amber-600">⬡</div>
                    <p className="text-xs font-semibold text-zinc-900">正六角形</p>
                  </div>
                </div>
                <HexDiagram />
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-zinc-700">対辺距離 ({materialUnitLabel})</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={hexFlat}
                    onChange={(e) => setHexFlat(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-zinc-700">一辺の長さ ({materialUnitLabel})</label>
                  <input
                    type="number"
                    inputMode="decimal"
                    value={hexSide}
                    onChange={(e) => setHexSide(e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 bg-white px-2.5 py-1.5 text-[13px] text-zinc-900 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-500/30"
                  />
                  <p className="text-[10px] text-zinc-500">※ 一辺と対辺距離の両方入力時は一辺を優先</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
            <h2 className="text-sm font-semibold text-zinc-900">出力（同じ面積の円の直径）</h2>
            <CircleDiagram />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">●</div>
                <p className="text-xs font-semibold text-zinc-900">四角形 → 円の直径</p>
              </div>
              <p className="text-2xl font-semibold tracking-tight text-emerald-700">
                {formatNumber(rectDiameter)}
                <span className="ml-1 text-sm font-medium text-zinc-600">mm</span>
              </p>
            </div>
            <div className="h-px w-full bg-zinc-300" />
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-amber-700">●</div>
                <p className="text-xs font-semibold text-zinc-900">正六角形 → 円の直径</p>
              </div>
              <p className="text-2xl font-semibold tracking-tight text-amber-700">
                {formatNumber(hexDiameter)}
                <span className="ml-1 text-sm font-medium text-zinc-600">mm</span>
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5 text-[12px]">
          <h2 className="text-sm font-semibold text-zinc-900">材料購入リンク</h2>
          <div className="flex flex-wrap items-center gap-3">
            {diameterForLinkRounded == null ? (
              <p className="text-zinc-600">四角形または正六角形の寸法を入力するとリンクが表示されます。</p>
            ) : (
              <>
                <p className="text-zinc-700">
                  目安直径: <span className="font-semibold text-sky-600">{diameterForLinkRounded} mm</span>
                </p>
                {amazonUrl && (
                  <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#FF9900] px-3 py-1 text-[11px] font-semibold text-white hover:bg-[#e68a00]"
                  >
                    Amazonで「丸棒 {diameterForLinkRounded}mm」を検索
                  </a>
                )}
                {monotaroUrl && (
                  <a
                    href={monotaroUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-700"
                  >
                    モノタロウで「丸棒 {diameterForLinkRounded}mm」を検索
                  </a>
                )}
              </>
            )}
          </div>
        </section>

        <section className="mt-8 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5 text-[12px]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-zinc-900">設計仕様書 PDF レポート</h2>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-4 py-1.5 text-xs font-semibold text-white hover:bg-zinc-700 print:hidden"
            >
              PDFとして保存（印刷）
            </button>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-4 text-[11px] text-zinc-800 shadow-sm print:border-zinc-300">
            <div className="flex flex-wrap justify-between gap-2 border-b border-zinc-200 pb-2 print:border-zinc-300">
              <div>
                <p className="font-semibold text-zinc-900">Shape Circle Converter 設計仕様書</p>
                <p className="text-zinc-600">四角形・正六角形 → 円の面積換算</p>
              </div>
              <p className="text-zinc-600">
                日時: {new Date().toLocaleString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div>
                <p className="mb-1 font-semibold text-zinc-800">入力条件</p>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr><td className="border border-zinc-200 px-2 py-1">単位</td><td className="border border-zinc-200 px-2 py-1">{unit}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">四角形 縦</td><td className="border border-zinc-200 px-2 py-1">{rectHeight || "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">四角形 横</td><td className="border border-zinc-200 px-2 py-1">{rectWidth || "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">正六角形 対辺距離</td><td className="border border-zinc-200 px-2 py-1">{hexFlat || "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">正六角形 一辺</td><td className="border border-zinc-200 px-2 py-1">{hexSide || "-"}</td></tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p className="mb-1 font-semibold text-zinc-800">計算結果（mm換算）</p>
                <table className="w-full border-collapse">
                  <tbody>
                    <tr><td className="border border-zinc-200 px-2 py-1">四角形 面積</td><td className="border border-zinc-200 px-2 py-1">{rectArea != null ? `${formatNumber(rectArea, 0)} mm²` : "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">四角形 → 円 直径</td><td className="border border-zinc-200 px-2 py-1">{rectDiameter != null ? `${formatNumber(rectDiameter)} mm` : "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">正六角形 面積</td><td className="border border-zinc-200 px-2 py-1">{hexArea != null ? `${formatNumber(hexArea, 0)} mm²` : "-"}</td></tr>
                    <tr><td className="border border-zinc-200 px-2 py-1">正六角形 → 円 直径</td><td className="border border-zinc-200 px-2 py-1">{hexDiameter != null ? `${formatNumber(hexDiameter)} mm` : "-"}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-3 border-t border-zinc-200 pt-2 text-[10px] text-zinc-500">
              ※ 本ツールはプロトタイプです。実際の設計・製造の際には専門家の確認を行ってください。
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
