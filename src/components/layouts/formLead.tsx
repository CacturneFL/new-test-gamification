"use client";

import { useState } from "react";
import { Lead, Step } from "@/lib/types";

type LayoutProps = {
  step: Step;
  lead?: Lead;
  onSubmit: (lead: Lead) => void;
};

export default function FormLead({ step, lead, onSubmit }: LayoutProps) {
  const [name, setName] = useState(lead?.name ?? "");
  const [whatsapp, setWhatsapp] = useState(lead?.whatsapp ?? "");
  const [consent, setConsent] = useState(lead?.consent ?? false);

  const isValid = name.trim().length > 1 && whatsapp.trim().length > 7 && consent;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!isValid) return;
    onSubmit({ name, whatsapp, consent });
  };

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
        {step.microcopy && <p className="mt-2 text-xs text-slate-400">{step.microcopy}</p>}
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Nome
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-400"
            placeholder="Seu nome"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-slate-300">
          WhatsApp
          <input
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-brand-400"
            placeholder="(DDD) 99999-9999"
            required
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-950 text-brand-500"
          />
          Concordo em receber o resumo e resultados no WhatsApp.
        </label>

        <button
          type="submit"
          disabled={!isValid}
          className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Enviar e continuar
        </button>
      </form>
    </div>
  );
}
