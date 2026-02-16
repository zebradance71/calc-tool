import { formatNumber, type Unit } from "@/lib/utils";

interface PDFReportProps {
  unit: Unit;
  rectHeight: string;
  rectWidth: string;
  hexFlat: string;
  hexSide: string;
  rectArea: number | null;
  rectDiameter: number | null;
  hexArea: number | null;
  hexDiameter: number | null;
}

export function PDFReport({
  unit,
  rectHeight,
  rectWidth,
  hexFlat,
  hexSide,
  rectArea,
  rectDiameter,
  hexArea,
  hexDiameter,
}: PDFReportProps) {
  const handlePrint = () => {
    if (typeof window === "undefined") return;
    window.print();
  };

  return (
    <section
      id="pdf"
      className="mt-8 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5 text-[12px]"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-sm font-semibold text-zinc-900">
          設計仕様書 PDF レポート
        </h2>
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
            <p className="font-semibold text-zinc-900">
              Shape Circle Converter 設計仕様書
            </p>
            <p className="text-zinc-600">
              四角形・正六角形 → 円の面積換算
            </p>
          </div>
          <p className="text-zinc-600">
            日時:{" "}
            {new Date().toLocaleString("ja-JP", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          <div>
            <p className="mb-1 font-semibold text-zinc-800">入力条件</p>
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">単位</td>
                  <td className="border border-zinc-200 px-2 py-1">{unit}</td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    四角形 縦
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {rectHeight || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    四角形 横
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {rectWidth || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    正六角形 対辺距離
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {hexFlat || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    正六角形 一辺
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {hexSide || "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="mb-1 font-semibold text-zinc-800">
              計算結果（mm換算）
            </p>
            <table className="w-full border-collapse">
              <tbody>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    四角形 面積
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {rectArea != null
                      ? `${formatNumber(rectArea, 0)} mm²`
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    四角形 → 円 直径
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {rectDiameter != null
                      ? `${formatNumber(rectDiameter)} mm`
                      : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    正六角形 面積
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {hexArea != null ? `${formatNumber(hexArea, 0)} mm²` : "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border border-zinc-200 px-2 py-1">
                    正六角形 → 円 直径
                  </td>
                  <td className="border border-zinc-200 px-2 py-1">
                    {hexDiameter != null
                      ? `${formatNumber(hexDiameter)} mm`
                      : "-"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 border-t border-zinc-200 pt-2 text-[10px] text-zinc-500">
          ※
          本ツールはプロトタイプです。実際の設計・製造の際には専門家の確認を行ってください。
        </p>
      </div>
    </section>
  );
}
