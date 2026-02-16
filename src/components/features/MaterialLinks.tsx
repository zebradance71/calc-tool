interface MaterialLinksProps {
  diameterMm: number | null;
}

export function MaterialLinks({ diameterMm }: MaterialLinksProps) {
  if (diameterMm == null || !Number.isFinite(diameterMm)) {
    return (
      <section className="mt-8 space-y-3 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
        <h2 className="text-sm font-semibold text-zinc-900">材料購入リンク</h2>
        <p className="text-[12px] text-zinc-600">
          四角形または正六角形の寸法を入力すると、おすすめの材料購入リンクが表示されます。
        </p>
      </section>
    );
  }

  const roundedDiameter = Math.round(diameterMm);
  const searchQuery = `丸棒 ${roundedDiameter}mm`;

  const amazonBeginnerUrl = `https://www.amazon.co.jp/s?k=${encodeURIComponent(searchQuery + " 初心者")}&tag=zebradance-22`;
  const amazonPrecisionUrl = `https://www.amazon.co.jp/s?k=${encodeURIComponent(searchQuery + " 高精度 研磨")}&tag=zebradance-22`;
  const amazonSetUrl = `https://www.amazon.co.jp/s?k=${encodeURIComponent("丸棒 セット")}&tag=zebradance-22`;

  return (
    <section className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 sm:p-5">
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-zinc-900">材料購入リンク</h2>
        <p className="text-[12px] text-zinc-700">
          計算結果の直径: <span className="font-bold text-sky-600">{roundedDiameter} mm</span>
          　用途に合わせてお選びください。
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* 初心者向け */}
        <div className="flex flex-col gap-3 rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold">
              🌱
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-900">初心者向け</p>
              <p className="text-[10px] text-emerald-700">コスパ重視・汎用品</p>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-zinc-700">
            一般的な用途に最適な汎用材料。価格が手頃で、DIYや試作に向いています。
          </p>
          <div className="mt-auto">
            <a
              href={amazonBeginnerUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-[#FF9900] px-3 py-2.5 text-[11px] font-semibold text-white hover:bg-[#e68a00] transition shadow-sm"
            >
              <span>🛒</span> Amazonで探す
            </a>
          </div>
        </div>

        {/* 高精度モデル */}
        <div className="flex flex-col gap-3 rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-700 text-sm font-bold">
              ⚙️
            </div>
            <div>
              <p className="text-xs font-bold text-sky-900">高精度モデル</p>
              <p className="text-[10px] text-sky-700">研磨材・公差h6〜h7</p>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-zinc-700">
            精密加工済みの高品質材料。寸法精度が求められる機械部品や治具に最適です。
          </p>
          <div className="mt-auto">
            <a
              href={amazonPrecisionUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2.5 text-[11px] font-semibold text-white hover:bg-sky-700 transition shadow-sm"
            >
              <span>🎯</span> Amazonで探す
            </a>
          </div>
        </div>

        {/* セット販売 */}
        <div className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4 shadow-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-sm font-bold">
              📦
            </div>
            <div>
              <p className="text-xs font-bold text-amber-900">セット販売</p>
              <p className="text-[10px] text-amber-700">複数サイズまとめ買い</p>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-zinc-700">
            複数の直径がセットになった商品。在庫として持っておくと便利でお得です。
          </p>
          <div className="mt-auto">
            <a
              href={amazonSetUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-amber-600 px-3 py-2.5 text-[11px] font-semibold text-white hover:bg-amber-700 transition shadow-sm"
            >
              <span>🎁</span> Amazonで探す
            </a>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-zinc-500">
        ※ Amazonアソシエイトリンクです。リンク先は検索結果ページです。材質（鉄・ステンレス・アルミ等）や長さ、公差をご確認の上、用途に合った商品をお選びください。
      </p>
    </section>
  );
}
