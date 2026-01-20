export type LayoutType =
  | "oneColumnCards"
  | "twoColumnCards"
  | "grid2x2"
  | "split"
  | "chips"
  | "formLead"
  | "whatsappMock"
  | "result"
  | "panel";

export type StepType = "choice" | "lead" | "whatsapp" | "result" | "panel";

export type Option = {
  id: string;
  label: string;
  description?: string;
  tag?: string;
};

export type Step = {
  id: string;
  title: string;
  subtitle?: string;
  microcopy?: string;
  type: StepType;
  layout: LayoutType;
  options?: Option[];
  helper?: string;
  visual?: {
    label: string;
    tone?: "cool" | "warm" | "nature";
  };
};

export type Lead = {
  name: string;
  whatsapp: string;
  consent: boolean;
};

export type FunnelState = {
  stepIndex: number;
  answers: Record<string, string>;
  lead?: Lead;
};

export type FunnelAction =
  | { type: "ANSWER"; stepId: string; value: string }
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "SET_LEAD"; lead: Lead };
