import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px]">
            <Link
              href="/privacy"
              className="text-zinc-600 hover:text-zinc-900 hover:underline"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="text-zinc-600 hover:text-zinc-900 hover:underline"
            >
              お問い合わせ
            </Link>
            <Link
              href="/about"
              className="text-zinc-600 hover:text-zinc-900 hover:underline"
            >
              運営者情報
            </Link>
          </div>
          <div className="flex flex-col gap-2 border-t border-zinc-200 pt-3">
            <p className="text-xs font-medium text-zinc-700">Shape Circle Converter</p>
            <p className="text-[10px] text-zinc-500">
              © 2026 Prototype Tool. 実際の設計時は専門家の確認をお願いします。
            </p>
            <p className="text-[10px] text-zinc-500">
              Amazonのアソシエイトとして、当サイトは適格販売により収入を得ています。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
