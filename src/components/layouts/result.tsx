"use client";

import { Step } from "@/lib/types";

const answerLabels: Record<string, string> = {
  investidor: "perfil investidor",
  casa_campo: "casa de campo",
  hibrido: "perfil híbrido",
  plano: "topografia plana",
  leve: "leve declive",
  moderado: "declive moderado",
  acidentado: "terreno acidentado",
  contemporaneo: "estilo contemporâneo",
  rustico: "rústico chique",
  minimalista: "minimalista",
  qa: "quitação acelerada (QA)",
  pontual: "perfil pontual",
  flexivel: "perfil flexível"
};

type LayoutProps = {
  step: Step;
  answers: Record<string, string>;
};

export default function ResultLayout({ step, answers }: LayoutProps) {
  const topografia = answers.topografia ? answerLabels[answers.topografia] : "topografia";
  const estilo = answers.estilo ? answerLabels[answers.estilo] : "estilo";
  const intencao = answers.intencao ? answerLabels[answers.intencao] : "intenção";
  const quitacao = answers.quitacao ? answerLabels[answers.quitacao] : "perfil de quitação";

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h2 className="text-2xl font-semibold text-white md:text-3xl">{step.title}</h2>
        {step.subtitle && <p className="mt-2 text-sm text-slate-300">{step.subtitle}</p>}
      </header>

      <div className="rounded-3xl border border-brand-500/50 bg-gradient-to-br from-brand-500/20 via-slate-900 to-slate-950 p-6">
        <p className="text-sm text-slate-300">Margem projetada</p>
        <p className="mt-2 text-4xl font-semibold text-white">18% → até 44%</p>
        <p className="mt-2 text-sm text-slate-300">
          Sua faixa depende da combinação de terreno, estilo e velocidade de quitação.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
        <h3 className="text-lg font-semibold text-white">O que mais impactou</h3>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
          <li>
            {topografia} ajuda a reduzir custos de obra e libera margem adicional.
          </li>
          <li>
            {estilo} reforça a percepção premium e sustenta ticket mais alto.
          </li>
          <li>
            A intenção de {intencao} define o ritmo de revenda e precificação.
          </li>
          <li>
            O {quitacao} aumenta o poder de negociação e descontos no terreno.
          </li>
        </ul>
      </div>
    </div>
  );
}
