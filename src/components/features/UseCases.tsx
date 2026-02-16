export function UseCases() {
  return (
    <section className="mt-8 space-y-5 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 shadow-sm">
      <header>
        <h2 className="text-lg font-bold text-zinc-900">
          このツールの活用シーンとメリット
        </h2>
      </header>

      <div className="space-y-5 text-[13px] leading-relaxed text-zinc-700">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🏭</span>
              <h3 className="font-semibold text-emerald-900">製造・設計現場での活用</h3>
            </div>
            <p className="text-zinc-700">
              四角形や六角形の部品図面から、同じ面積の丸棒を調達する際に便利です。
              円に換算することで、旋盤加工や研削加工に適した材料サイズをすぐに把握でき、
              設計変更や材料手配がスムーズになります。
            </p>
          </div>

          <div className="rounded-xl border border-sky-200 bg-gradient-to-br from-sky-50 to-white p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">🔨</span>
              <h3 className="font-semibold text-sky-900">DIY・工作での利用</h3>
            </div>
            <p className="text-zinc-700">
              木工や金属工作で、四角い材料から丸い部品を作りたい時、
              必要な丸棒の直径を事前に計算できます。材料の無駄を減らし、
              購入前に適切なサイズを確認できるため、コストと時間を節約できます。
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">📐</span>
              <h3 className="font-semibold text-amber-900">学習・研究での応用</h3>
            </div>
            <p className="text-zinc-700">
              機械工学や材料力学の学習で、異なる断面形状の換算を理解する際に役立ちます。
              図解付きで計測箇所が明確なため、面積計算の原理を視覚的に学べます。
            </p>
          </div>

          <div className="rounded-xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xl">💰</span>
              <h3 className="font-semibold text-rose-900">コスト削減への貢献</h3>
            </div>
            <p className="text-zinc-700">
              丸材は流通量が多く、四角材や六角材より安価な場合があります。
              円換算により最適な丸棒サイズを選定できれば、材料費を抑えながら
              同等の強度や面積を確保できます。
            </p>
          </div>
        </div>

        <div className="rounded-xl border-l-4 border-sky-600 bg-sky-50/50 p-4">
          <h3 className="mb-2 font-semibold text-sky-900">
            ⚡ リアルタイム計算で作業効率アップ
          </h3>
          <p className="text-zinc-700">
            数値を入力すると即座に円の直径が表示されるため、
            複数のサイズを試しながら最適な材料を検討できます。
            図解で計測箇所も明確なので、測定ミスを防ぎ、正確な換算が可能です。
          </p>
        </div>

        <div className="rounded-xl border-l-4 border-emerald-600 bg-emerald-50/50 p-4">
          <h3 className="mb-2 font-semibold text-emerald-900">
            📦 材料購入もスムーズに
          </h3>
          <p className="text-zinc-700">
            計算結果から、初心者向けの汎用品、高精度モデル、セット販売など、
            用途に応じた材料へのリンクが表示されます。DIYから本格的な設計まで、
            幅広いニーズに対応した材料選びをサポートします。
          </p>
        </div>
      </div>

      <footer className="border-t border-zinc-200 pt-4 text-[11px] text-zinc-500">
        <p>
          💡 四角形や正六角形から円への換算は、機械加工・材料調達・DIY工作など、
          様々な場面で必要とされる計算です。本ツールを活用することで、
          専門知識がなくても正確な丸棒サイズを把握でき、作業の効率化とコスト削減を実現できます。
        </p>
      </footer>
    </section>
  );
}
