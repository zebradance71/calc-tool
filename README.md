# Shape Circle Converter

四角形・正六角形と同じ面積を持つ円の直径をリアルタイムで計算するツール

## 🌟 機能

- **リアルタイム計算**: 数値入力と同時に円の直径を計算
- **図解付き**: 計測箇所を図で分かりやすく表示
- **材料購入リンク**: Amazon（初心者向け・高精度・セット販売）への直接リンク
- **PDF出力**: 計算結果を設計仕様書としてPDF保存
- **専門解説**: 材料選びのコツや換算の必要性を解説
- **レスポンシブ対応**: スマホ・タブレット・PCで最適表示

## 🚀 技術スタック

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: React 19
- **Build Tool**: Turbopack

## 📁 プロジェクト構造

```
src/
├── app/
│   ├── layout.tsx          # ルートレイアウト（メタデータ・SEO）
│   ├── page.tsx            # トップページ
│   ├── privacy/
│   │   └── page.tsx        # プライバシーポリシー
│   ├── sitemap.ts          # サイトマップ生成
│   └── globals.css         # グローバルスタイル
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # ヘッダー
│   │   ├── Footer.tsx      # フッター
│   │   └── AdPlaceholder.tsx # 広告プレースホルダー
│   └── features/
│       ├── Calculator.tsx   # 計算機UI
│       ├── ExpertCommentary.tsx # 専門解説
│       ├── MaterialLinks.tsx    # 材料購入リンク
│       └── PDFReport.tsx        # PDF出力
└── lib/
    └── utils.ts            # 計算ロジック
```

## 🎯 SEO対策

### メタデータ最適化
- タイトル・ディスクリプション最適化
- キーワード設定
- Open Graph (OGP) タグ
- Twitter Card
- Canonical URL

### 構造化データ (JSON-LD)
- WebApplication スキーマ
- 機能リスト
- 提供者情報

### サイトマップ
- 動的生成 (`/sitemap.xml`)
- 全ページ登録

### robots.txt
- クローラー設定
- サイトマップURL指定

### セマンティックHTML
- `<article>`, `<section>`, `<header>` の適切な使用
- アクセシビリティ対応 (`aria-hidden`)

## 💰 収益化

### Amazonアソシエイト
- アソシエイトID: `zebradance-22`
- 3種類の材料リンク（初心者向け・高精度・セット販売）
- プライバシーポリシーに参加表記

### 広告枠
- ヘッダー下とフッター上にプレースホルダー設置
- レスポンシブ対応
- 印刷時は非表示

## 🛠️ 開発

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```

## 📝 カスタマイズ

### ドメイン設定
実際のドメイン: `https://calc-tool-ten.vercel.app`（設定済み）

### Google Search Console
`src/app/layout.tsx` の `metadata.verification.google` に検証コードを設定

### Google AdSense設定
1. AdSense審査を申請（クライアントID: `ca-pub-7907240934096694` 設定済み）
2. 審査通過後、AdSenseの管理画面で広告ユニットを作成
3. `src/components/layout/AdPlaceholder.tsx` のコメントを外して、広告ユニットのスロットIDを設定

## 📄 ライセンス

プロトタイプツール - 実際の設計時は専門家の確認をお願いします。

## 🔗 リンク

- トップページ: `/`
- プライバシーポリシー: `/privacy`
- お問い合わせ: `/contact`
- 運営者情報: `/about`
- サイトマップ: `/sitemap.xml`

---

© 2026 Shape Circle Converter
