import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "四角形・正六角形を円に換算｜Shape Circle Converter【丸棒直径計算ツール】",
  description: "四角形・正六角形と同じ面積の円の直径をリアルタイム計算。設計・材料調達に便利な無料ツール。図解付きで計測箇所も分かりやすく表示。Amazon材料リンク・PDF出力機能付き。",
  keywords: ["四角形 円 換算", "正六角形 面積", "丸棒 直径 計算", "円 直径", "面積換算", "材料計算", "設計ツール", "Shape Circle Converter"],
  authors: [{ name: "Shape Circle Converter" }],
  creator: "Shape Circle Converter",
  publisher: "Shape Circle Converter",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://calc-tool-ten.vercel.app",
    title: "四角形・正六角形を円に換算｜Shape Circle Converter",
    description: "四角形・正六角形と同じ面積の円の直径をリアルタイム計算。設計・材料調達に便利な無料ツール。",
    siteName: "Shape Circle Converter",
  },
  twitter: {
    card: "summary_large_image",
    title: "四角形・正六角形を円に換算｜Shape Circle Converter",
    description: "四角形・正六角形と同じ面積の円の直径をリアルタイム計算。設計・材料調達に便利な無料ツール。",
  },
  alternates: {
    canonical: "https://calc-tool-ten.vercel.app",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Shape Circle Converter",
    description: "四角形・正六角形と同じ面積の円の直径を計算する無料ツール",
    url: "https://calc-tool-ten.vercel.app",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
    author: {
      "@type": "Organization",
      name: "Shape Circle Converter",
    },
    featureList: [
      "四角形から円への面積換算",
      "正六角形から円への面積換算",
      "リアルタイム計算",
      "図解付き計測説明",
      "PDF出力機能",
      "Amazon材料購入リンク",
    ],
  };

  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7907240934096694"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-zinc-800`}
      >
        {children}
      </body>
    </html>
  );
}
