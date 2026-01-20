"use client";

import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Lead } from "@/lib/types";

const terrains = [
  {
    id: "t1",
    title: "Vista Serra",
    city: "Campos do Jordão",
    price: "R$ 320k",
    tag: "QA"
  },
  {
    id: "t2",
    title: "Lago Azul",
    city: "Atibaia",
    price: "R$ 280k",
    tag: "QA"
  },
  {
    id: "t3",
    title: "Bosque Premium",
    city: "Gonçalves",
    price: "R$ 240k",
    tag: "QA"
  },
  {
    id: "t4",
    title: "Vale Reserva",
    city: "São Bento",
    price: "R$ 210k",
    tag: "QA"
  },
  {
    id: "t5",
    title: "Montanha Sul",
    city: "Serra Negra",
    price: "R$ 360k",
    tag: "QA"
  },
  {
    id: "t6",
    title: "Panorama 44%",
    city: "Itatiba",
    price: "R$ 190k",
    tag: "QA"
  }
];

type PanelMockProps = {
  lead?: Lead;
};

export default function PanelMock({ lead }: PanelMockProps) {
  const phone = lead?.whatsapp ?? "55";
  const message = "Quero receber opções do Painel Terrenos QA.";
  const whatsappLink = buildWhatsAppLink(phone, message);

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Filtros rápidos</h3>
            <p className="text-sm text-slate-300">Refine as oportunidades em segundos.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Cidade", "Faixa de preço", "Tag QA"].map((filter) => (
              <span
                key={filter}
                className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {terrains.map((terrain) => (
          <div
            key={terrain.id}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-soft"
          >
            <div className="mb-4 flex h-24 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500/20 via-slate-900 to-slate-950">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-300">Terreno</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-white">{terrain.title}</p>
                <p className="text-xs text-slate-400">{terrain.city}</p>
              </div>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-200">
                {terrain.tag}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{terrain.price}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-400"
        >
          ACESSAR O PAINEL TERRENOS QA
        </button>
        <a
          href={whatsappLink}
          className="rounded-full border border-emerald-500/60 px-6 py-3 text-center text-sm font-semibold text-emerald-200 transition hover:bg-emerald-500/10"
        >
          Receber opções no WhatsApp
        </a>
      </div>
    </div>
  );
}
