export function ExpertCommentary() {
  return (
    <article className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100/50 p-5 sm:p-6">
      <header className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-600 text-white" aria-hidden="true">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-base font-bold text-zinc-900">
          なぜ四角形・六角形を円に換算する必要があるのか？
        </h2>
      </header>

      <div className="space-y-4 text-[13px] leading-relaxed text-zinc-700">
        <div>
          <h3 className="mb-1.5 font-semibold text-zinc-900">
            ■ 材料調達と加工コストの最適化
          </h3>
          <p>
            製造現場では、四角形や六角形の部材から「同じ面積の丸棒・円盤を切り出したい」という状況が頻発します。
            特に金属加工・樹脂成形・木工などの分野では、<strong>丸材のほうが流通量が多く、価格も手頃</strong>なケースが一般的です。
            設計段階で「この四角パーツと同等の面積を持つ円材は直径何mmか？」を把握しておくことで、
            材料発注の無駄を減らし、加工コストを抑えられます。
          </p>
        </div>

        <div>
          <h3 className="mb-1.5 font-semibold text-zinc-900">
            ■ 正六角形（ヘックス）材料の特殊性
          </h3>
          <p>
            正六角形断面の材料（六角棒・六角ボルト素材など）は、<strong>回転を防ぐ</strong>目的や、
            レンチ・スパナでの締結に使われます。しかし、加工の際に円形旋盤で削る場合、
            「外接円の直径」または「同じ断面積の円の直径」を知っておく必要があります。
            本ツールでは<strong>対辺距離（フラット間）</strong>または<strong>一辺の長さ</strong>から、
            正確な面積等価円を算出できます。
          </p>
        </div>

        <div>
          <h3 className="mb-1.5 font-semibold text-zinc-900">
            ■ 材料選びのコツと注意点
          </h3>
          <ul className="ml-4 list-disc space-y-1 text-zinc-700">
            <li>
              <strong>直径の丸め</strong>：計算結果は小数点以下まで表示されますが、
              実際の材料は「φ10mm」「φ12mm」など規格サイズで流通しています。
              <strong>直径を切り上げ</strong>して余裕を持った材料を選ぶのが安全です。
            </li>
            <li>
              <strong>材質の違い</strong>：アルミ・鉄・ステンレス・樹脂など、
              同じ直径でも材質により重量・強度・価格が大きく異なります。
              用途に応じて適切な材質を選定してください。
            </li>
            <li>
              <strong>公差と精度</strong>：汎用材はh9〜h11公差が一般的です。
              高精度が必要な場合は、研磨材や精密公差品（h6〜h7）を選びましょう。
            </li>
            <li>
              <strong>セット販売の活用</strong>：複数サイズをまとめ買いすることで、
              送料や単価を抑えられます。在庫として持っておくと次回の設計がスムーズです。
            </li>
          </ul>
        </div>

      </div>
    </article>
  );
}
