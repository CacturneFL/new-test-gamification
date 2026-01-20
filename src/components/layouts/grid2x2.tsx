"use client";

import { motion } from "framer-motion";
import { Step } from "@/lib/types";

type LayoutProps = {
  step: Step;
  selected?: string;
  onSelect: (value: string) => void;
};

export default function Grid2x2({ step, selected, onSelect }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {step.options?.map((option, index) => (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => onSelect(option.id)}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.04 }}
            className={`rounded-2xl border px-5 py-6 text-left transition hover:border-brand-400 hover:bg-brand-500/10 ${
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
  );
}
