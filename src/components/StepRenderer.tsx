"use client";

import { Step, Lead } from "@/lib/types";
import OneColumnCards from "@/components/layouts/oneColumnCards";
import TwoColumnCards from "@/components/layouts/twoColumnCards";
import Grid2x2 from "@/components/layouts/grid2x2";
import SplitLayout from "@/components/layouts/split";
import ChipsLayout from "@/components/layouts/chips";
import FormLead from "@/components/layouts/formLead";
import WhatsappMock from "@/components/layouts/whatsappMock";
import ResultLayout from "@/components/layouts/result";
import PanelLayout from "@/components/layouts/panel";

export type StepRendererProps = {
  step: Step;
  answers: Record<string, string>;
  lead?: Lead;
  onAnswer: (value: string) => void;
  onLeadSubmit: (lead: Lead) => void;
  onNext: () => void;
};

export default function StepRenderer({
  step,
  answers,
  lead,
  onAnswer,
  onLeadSubmit,
  onNext
}: StepRendererProps) {
  const selected = answers[step.id];

  switch (step.layout) {
    case "oneColumnCards":
      return <OneColumnCards step={step} selected={selected} onSelect={onAnswer} />;
    case "twoColumnCards":
      return <TwoColumnCards step={step} selected={selected} onSelect={onAnswer} />;
    case "grid2x2":
      return <Grid2x2 step={step} selected={selected} onSelect={onAnswer} />;
    case "split":
      return <SplitLayout step={step} selected={selected} onSelect={onAnswer} />;
    case "chips":
      return <ChipsLayout step={step} selected={selected} onSelect={onAnswer} />;
    case "formLead":
      return <FormLead step={step} lead={lead} onSubmit={onLeadSubmit} />;
    case "whatsappMock":
      return <WhatsappMock step={step} onNext={onNext} />;
    case "result":
      return <ResultLayout step={step} answers={answers} />;
    case "panel":
      return <PanelLayout step={step} lead={lead} />;
    default:
      return null;
  }
}
