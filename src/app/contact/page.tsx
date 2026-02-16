"use client";

import { Metadata } from "next";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 実際の送信処理はここに実装（例: API呼び出し、メール送信サービスなど）
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // 3秒後にフォームをリセット
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-sky-600 hover:text-sky-700 hover:underline"
          >
            ← トップページに戻る
          </Link>
        </div>

        <h1 className="mb-8 text-3xl font-bold text-zinc-900">お問い合わせ</h1>

        <div className="space-y-6">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
            <p className="text-sm leading-relaxed text-zinc-700">
              Shape Circle Converterに関するご質問、ご要望、バグ報告などがございましたら、
              下記のフォームよりお気軽にお問い合わせください。
            </p>
          </div>

          {submitted ? (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-8 w-8 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-bold text-emerald-900">
                送信完了
              </h2>
              <p className="text-sm text-emerald-700">
                お問い合わせありがとうございます。
                <br />
                内容を確認次第、ご連絡させていただきます。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-zinc-900"
                >
                  お名前 <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-zinc-900"
                >
                  メールアドレス <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-zinc-900"
                >
                  お問い合わせ種類 <span className="text-red-600">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                >
                  <option value="">選択してください</option>
                  <option value="bug">バグ報告</option>
                  <option value="feature">機能リクエスト</option>
                  <option value="question">使い方の質問</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-zinc-900"
                >
                  お問い合わせ内容 <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                  placeholder="お問い合わせ内容を詳しくご記入ください。"
                />
              </div>

              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-xs text-zinc-600">
                <p>
                  ※ お送りいただいた個人情報は、お問い合わせへの回答のみに使用し、
                  第三者に提供することはありません。
                </p>
                <p className="mt-2">
                  ※ 内容によっては回答にお時間をいただく場合や、
                  回答できない場合がございます。予めご了承ください。
                </p>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-sky-600 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-700 transition shadow-sm"
              >
                送信する
              </button>
            </form>
          )}
        </div>
      </main>
    </div>
  );
}
