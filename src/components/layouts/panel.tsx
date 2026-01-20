"use client";

import { Step, Lead } from "@/lib/types";
import PanelMock from "@/components/PanelMock";

type LayoutProps = {
  step: Step;
  lead?: Lead;
};

export default function PanelLayout({ step, lead }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
      </header>
      <PanelMock lead={lead} />
    </div>
  );
}
