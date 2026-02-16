"use client";

import { useEffect } from "react";

export function AdPlaceholder({ position }: { position: "header" | "footer" }) {
  useEffect(() => {
    // Google AdSenseの広告を読み込む
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="border-y border-zinc-200 bg-zinc-100 py-3 print:hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Google AdSense 広告ユニット */}
        {/* 
          AdSense審査通過後、以下のコメントを外してください：
          
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
            data-ad-slot="YYYYYYYYYY"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        */}
        
        {/* プレースホルダー（審査通過後は削除） */}
        <div className="flex h-20 items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-xs text-zinc-400 sm:h-24">
          広告枠プレースホルダー（{position === "header" ? "ヘッダー下" : "フッター上"}）
          <br />
          <span className="text-[10px]">
            AdSense審査通過後に広告が表示されます
          </span>
        </div>
      </div>
    </div>
  );
}
