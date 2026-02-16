"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AdPlaceholder } from "@/components/layout/AdPlaceholder";
import { Calculator } from "@/components/features/Calculator";
import { ExpertCommentary } from "@/components/features/ExpertCommentary";
import { MaterialLinks } from "@/components/features/MaterialLinks";
import { PDFReport } from "@/components/features/PDFReport";
import { UseCases } from "@/components/features/UseCases";
import {
  type Unit,
  shapeAreaFromRectangle,
  shapeAreaFromHexagon,
  equivalentCircleDiameter,
} from "@/lib/utils";

export default function Page() {
  const [unit, setUnit] = useState<Unit>("mm");
  const [rectWidth, setRectWidth] = useState<string>("");
  const [rectHeight, setRectHeight] = useState<string>("");
  const [hexSide, setHexSide] = useState<string>("");
  const [hexFlat, setHexFlat] = useState<string>("");

  const rectArea = useMemo(
    () =>
      shapeAreaFromRectangle(
        parseFloat(rectWidth.replace(",", ".")),
        parseFloat(rectHeight.replace(",", ".")),
        unit
      ),
    [rectWidth, rectHeight, unit]
  );

  const hexArea = useMemo(
    () =>
      shapeAreaFromHexagon({
        side: parseFloat(hexSide.replace(",", ".")),
        flatToFlat: parseFloat(hexFlat.replace(",", ".")),
        unit,
      }),
    [hexSide, hexFlat, unit]
  );

  const rectDiameter = useMemo(
    () => equivalentCircleDiameter(rectArea ?? null),
    [rectArea]
  );

  const hexDiameter = useMemo(
    () => equivalentCircleDiameter(hexArea ?? null),
    [hexArea]
  );

  // MaterialLinksに渡す直径（いずれか一方が計算されていればそれを使用）
  const calculatedDiameter =
    rectDiameter != null && Number.isFinite(rectDiameter)
      ? rectDiameter
      : hexDiameter != null && Number.isFinite(hexDiameter)
        ? hexDiameter
        : null;

  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <Header />
      <AdPlaceholder position="header" />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-12">
        <article>
          <section className="mb-10 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Shape Circle Converter
            </p>
            <h1 className="text-balance text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              四角形・正六角形と同じ面積を持つ{" "}
              <span className="bg-gradient-to-r from-sky-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
                円の直径
              </span>
              をリアルタイムで計算。
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
              設計や材料手配のときに、「この四角形（あるいは六角形）と同じ面積の丸棒／円盤の直径が知りたい」という場面向けのツールです。計測箇所を図で示しています。
            </p>
          </section>

        <Calculator
          unit={unit}
          setUnit={setUnit}
          rectWidth={rectWidth}
          setRectWidth={setRectWidth}
          rectHeight={rectHeight}
          setRectHeight={setRectHeight}
          hexSide={hexSide}
          setHexSide={setHexSide}
          hexFlat={hexFlat}
          setHexFlat={setHexFlat}
          rectDiameter={rectDiameter}
          hexDiameter={hexDiameter}
        />

        <ExpertCommentary />

        <MaterialLinks diameterMm={calculatedDiameter} />

        <PDFReport
          unit={unit}
          rectHeight={rectHeight}
          rectWidth={rectWidth}
          hexFlat={hexFlat}
          hexSide={hexSide}
          rectArea={rectArea}
          rectDiameter={rectDiameter}
          hexArea={hexArea}
          hexDiameter={hexDiameter}
        />

        <UseCases />
        </article>
      </main>

      <AdPlaceholder position="footer" />
      <Footer />
    </div>
  );
}
