import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "運営者情報 | Shape Circle Converter",
  description: "Shape Circle Converterの運営者情報、サイトの目的、お問い合わせ先についての情報",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 hover:underline"
          >
            ← トップページに戻る
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-zinc-900">運営者情報</h1>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-700">
          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              サイト名
            </h2>
            <p className="text-base font-medium text-zinc-800">
              Shape Circle Converter（シェイプ・サークル・コンバーター）
            </p>
            <p className="mt-2 text-sm text-zinc-600">
              四角形・正六角形を円に換算する計算ツール
            </p>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              サイトURL
            </h2>
            <a
              href="https://calc-tool-ten.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-sky-600 hover:underline"
            >
              https://calc-tool-ten.vercel.app
            </a>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              運営者
            </h2>
            <p className="text-base text-zinc-800">Shape Circle Converter 運営チーム</p>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              サイトの目的
            </h2>
            <div className="space-y-3">
              <p>
                Shape Circle Converterは、設計・製造現場や個人のDIY・工作において、
                四角形や正六角形の部材と同等の面積を持つ円形材料（丸棒・円盤）のサイズを知りたいという
                ニーズに応えるために開発された無料の計算ツールです。
              </p>
              <p>
                以下のような方々に役立つことを目的としています：
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>機械設計・製造に携わるエンジニア</li>
                <li>金属加工・樹脂成形・木工などの専門家</li>
                <li>DIY・工作愛好家</li>
                <li>学生・研究者</li>
              </ul>
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              提供機能
            </h2>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong>リアルタイム計算</strong>：四角形・正六角形の寸法から円の直径を即座に算出
              </li>
              <li>
                <strong>図解付き説明</strong>：計測箇所を視覚的に分かりやすく表示
              </li>
              <li>
                <strong>材料購入支援</strong>：Amazonの材料検索リンクを自動生成
              </li>
              <li>
                <strong>PDF出力</strong>：計算結果を設計仕様書として保存可能
              </li>
              <li>
                <strong>専門解説</strong>：材料選びのコツや換算の必要性を詳しく解説
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              お問い合わせ
            </h2>
            <p className="mb-3">
              ツールに関するご質問、ご要望、バグ報告などがございましたら、
              お問い合わせフォームよりご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700 transition"
            >
              お問い合わせフォームへ →
            </Link>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              免責事項
            </h2>
            <div className="space-y-2 text-zinc-700">
              <p>
                本ツールで提供する計算結果は参考情報であり、実際の設計・製造における使用については、
                必ず専門家の確認を得てください。
              </p>
              <p>
                当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、
                正確性や安全性を保証するものではありません。
              </p>
              <p>
                当サイトに掲載された内容によって生じた損害等について、一切の責任を負いかねます。
                あらかじめご了承ください。
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              収益について
            </h2>
            <div className="space-y-2 text-zinc-700">
              <p>
                当サイトは、以下の方法により収益を得ています：
              </p>
              <ul className="ml-6 list-disc space-y-1">
                <li>
                  <strong>Amazonアソシエイト</strong>：
                  Amazon.co.jpへの商品リンクから発生する紹介料
                </li>
                <li>
                  <strong>Google AdSense</strong>：
                  広告配信による収益（将来的に実装予定）
                </li>
              </ul>
              <p className="mt-3">
                詳細は
                <Link href="/privacy" className="text-sky-600 hover:underline">
                  プライバシーポリシー
                </Link>
                をご覧ください。
              </p>
            </div>
          </section>

          <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-zinc-900">
              著作権
            </h2>
            <p>
              当サイトに掲載されているすべてのコンテンツ（文章、画像、プログラムなど）の著作権は、
              Shape Circle Converter 運営チームに帰属します。
              無断転載・複製を禁止します。
            </p>
          </section>

          <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            <p>制定日：2026年2月16日</p>
            <p>最終更新日：2026年2月16日</p>
          </div>
        </div>
      </main>
    </div>
  );
}
