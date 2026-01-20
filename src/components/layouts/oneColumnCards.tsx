"use client";

import { motion } from "framer-motion";
import { Step } from "@/lib/types";

type LayoutProps = {
  step: Step;
  selected?: string;
  onSelect: (value: string) => void;
};

export default function OneColumnCards({ step, selected, onSelect }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h1>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
        {step.microcopy && <p className="mt-2 text-xs text-slate-400">{step.microcopy}</p>}
      </header>

      <div className="flex flex-col gap-4">
        {step.options?.map((option, index) => (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`flex flex-col gap-2 rounded-2xl border px-5 py-4 text-left transition hover:border-brand-400 hover:bg-brand-500/10 ${
              selected === option.id
                ? "border-brand-400 bg-brand-500/15"
                : "border-slate-800 bg-slate-900/60"
            }`}
          >
            <span className="text-base font-semibold text-white">{option.label}</span>
            {option.description && (
              <span className="text-sm text-slate-300">{option.description}</span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
