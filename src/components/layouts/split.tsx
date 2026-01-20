"use client";

import { motion } from "framer-motion";
import { Step } from "@/lib/types";

type LayoutProps = {
  step: Step;
  selected?: string;
  onSelect: (value: string) => void;
};

const toneStyles: Record<string, string> = {
  cool: "from-brand-500/40 via-slate-900 to-slate-950",
  warm: "from-amber-500/40 via-slate-900 to-slate-950",
  nature: "from-emerald-500/40 via-slate-900 to-slate-950"
};

export default function SplitLayout({ step, selected, onSelect }: LayoutProps) {
  const tone = step.visual?.tone ?? "cool";
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
      </header>

      <div className="flex flex-col gap-6 md:flex-row">
        <div
          className={`flex min-h-[180px] flex-1 flex-col justify-end rounded-3xl border border-slate-800 bg-gradient-to-br p-6 ${
            toneStyles[tone]
          }`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-slate-300">
            {step.visual?.label}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-white">
            Terreno + projeto alinhados = margem superior
          </h3>
          <p className="mt-2 text-sm text-slate-300">
            Ajustamos o estilo para maximizar percepção e reduzir desperdício.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-4">
          {step.options?.map((option, index) => (
            <motion.button
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`rounded-2xl border px-5 py-4 text-left transition hover:border-brand-400 hover:bg-brand-500/10 ${
                selected === option.id
                  ? "border-brand-400 bg-brand-500/15"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              <p className="text-base font-semibold text-white">{option.label}</p>
              {option.description && (
                <p className="mt-2 text-sm text-slate-300">{option.description}</p>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
