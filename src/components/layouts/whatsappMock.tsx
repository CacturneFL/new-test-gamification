"use client";

import { Step } from "@/lib/types";
import PhoneWhatsAppMock from "@/components/PhoneWhatsAppMock";

type LayoutProps = {
  step: Step;
  onNext: () => void;
};

export default function WhatsappMock({ step, onNext }: LayoutProps) {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
      </header>

      <PhoneWhatsAppMock />

      <button
        type="button"
        onClick={onNext}
        className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-card transition hover:bg-emerald-400"
      >
        OK, quero meu resultado no WhatsApp
      </button>
    </div>
  );
}
