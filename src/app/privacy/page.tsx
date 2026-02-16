import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Shape Circle Converter",
  description: "Shape Circle Converterのプライバシーポリシー、Cookie使用、Amazonアソシエイト参加についての情報",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="mb-8 text-3xl font-bold text-zinc-900">プライバシーポリシー</h1>

        <div className="space-y-8 text-sm leading-relaxed text-zinc-700">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">個人情報の取り扱いについて</h2>
            <p>
              Shape Circle Converter（以下、「当サイト」といいます）は、ユーザーの個人情報を適切に保護し、
              安心してご利用いただけるサービスを提供するため、以下のプライバシーポリシーを定めます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">収集する情報</h2>
            <p className="mb-2">当サイトでは、以下の情報を収集する場合があります。</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>アクセス情報（IPアドレス、ブラウザの種類、アクセス日時など）</li>
              <li>Cookie（クッキー）による情報</li>
              <li>Google Analyticsなどのアクセス解析ツールによる情報</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">Cookieの使用について</h2>
            <p className="mb-2">
              当サイトでは、ユーザーの利便性向上やアクセス解析のために、Cookie（クッキー）を使用しています。
            </p>
            <p className="mb-2">
              Cookieとは、Webサイトが訪問者のコンピュータやスマートフォンに一時的にデータを保存する仕組みです。
              Cookieを無効にすることも可能ですが、その場合、当サイトの一部機能が正常に動作しない場合があります。
            </p>
            <p>
              Cookieの設定は、ご使用のブラウザの設定画面から変更することができます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">Amazonアソシエイト・プログラムについて</h2>
            <p className="mb-2">
              当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定された
              アフィリエイトプログラムである、<strong>Amazonアソシエイト・プログラムの参加者</strong>です。
            </p>
            <p className="mb-2">
              Amazonのアソシエイトとして、当サイト（Shape Circle Converter）は適格販売により収入を得ています。
            </p>
            <p>
              第三者（Amazon.co.jp）がCookieを使用して、ユーザーが当サイトや他のサイトに以前にアクセスした際の情報に基づいて広告を配信している場合があります。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">Google アナリティクスの使用について</h2>
            <p className="mb-2">
              当サイトでは、アクセス解析のためにGoogle アナリティクス（Google Analytics）を使用しています。
            </p>
            <p className="mb-2">
              Google アナリティクスは、トラフィックデータの収集のためにCookieを使用しています。
              このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p>
              Google アナリティクスの利用規約およびプライバシーポリシーに関する詳細は、
              <a
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 underline hover:text-sky-700"
              >
                Googleのサイト
              </a>
              をご覧ください。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">広告の配信について</h2>
            <p className="mb-2">
              当サイトでは、第三者配信の広告サービス（Google AdSenseなど）を利用する場合があります。
            </p>
            <p className="mb-3">
              これらの広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
              Cookieを使用した広告配信を無効にする場合は、各広告配信事業者のプライバシーポリシーをご確認ください。
            </p>
            <div className="rounded-lg border border-zinc-300 bg-zinc-50 p-4">
              <p className="mb-2 font-semibold text-zinc-900">Google AdSense について</p>
              <p className="mb-2 text-zinc-700">
                当サイトは、広告配信サービスとしてGoogle AdSenseを使用しています。
                Google AdSenseは、Cookieを使用してユーザーの興味に基づく広告を表示します。
              </p>
              <p className="mb-2 text-zinc-700">
                Googleのプライバシーポリシーは
                <a
                  href="https://policies.google.com/privacy?hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline hover:text-sky-700"
                >
                  こちら
                </a>
                をご覧ください。
              </p>
              <p className="text-zinc-700">
                広告のパーソナライズを無効にする方法については、
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 underline hover:text-sky-700"
                >
                  広告設定ページ
                </a>
                をご確認ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">免責事項</h2>
            <p className="mb-2">
              当サイトで提供する計算結果は参考情報であり、実際の設計・製造における使用については、
              必ず専門家の確認を得てください。
            </p>
            <p>
              当サイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、
              正確性や安全性を保証するものではありません。
              当サイトに掲載された内容によって生じた損害等について、一切の責任を負いかねます。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">リンクについて</h2>
            <p>
              当サイトは、外部サイトへのリンクを含んでいます。
              リンク先のサイトで提供される情報、サービス等について、一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">プライバシーポリシーの変更について</h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーの内容を変更することがあります。
              変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-zinc-900">お問い合わせ</h2>
            <p>
              本プライバシーポリシーに関するお問い合わせは、当サイトの運営者までご連絡ください。
            </p>
          </section>

          <div className="mt-10 border-t border-zinc-200 pt-6 text-xs text-zinc-500">
            <p>制定日：2026年2月16日</p>
            <p>最終更新日：2026年2月16日</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 hover:underline"
          >
            ← トップページに戻る
          </a>
        </div>
      </main>
    </div>
  );
}
