"use client";

import { motion } from "framer-motion";
import { Step } from "@/lib/types";

type LayoutProps = {
  step: Step;
  selected?: string;
  onSelect: (value: string) => void;
};

export default function ChipsLayout({ step, selected, onSelect }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
        {step.microcopy && <p className="mt-2 text-xs text-slate-400">{step.microcopy}</p>}
      </header>

      <div className="flex flex-wrap gap-3">
        {step.options?.map((option, index) => (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className={`rounded-full border px-5 py-3 text-sm font-semibold transition hover:border-brand-400 hover:bg-brand-500/10 ${
              selected === option.id
                ? "border-brand-400 bg-brand-500/15 text-white"
                : "border-slate-700 text-slate-300"
            }`}
          >
            {option.label}
          </motion.button>
        ))}
      </div>
      {step.options?.map((option) =>
        selected === option.id && option.description ? (
          <div key={option.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-sm text-slate-300">{option.description}</p>
          </div>
        ) : null
      )}
    </div>
  );
}
