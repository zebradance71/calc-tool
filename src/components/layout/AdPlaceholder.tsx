"use client";

import { useEffect } from "react";

export function AdPlaceholder({ position }: { position: "header" | "footer" }) {
  useEffect(() => {
    // Google AdSenseの広告を読み込む
    try {
      if (typeof window !== "undefined") {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="border-y border-zinc-200 bg-zinc-100 py-3 print:hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Google AdSense ディスプレイ広告 */}
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-7907240934096694"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
