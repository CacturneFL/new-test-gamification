"use client";

import { motion } from "framer-motion";

type ProgressBarProps = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span>Progresso</span>
        <span>{percentage}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}
