"use client";

import { useEffect, useMemo, useReducer } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { steps } from "@/config/steps";
import { FunnelAction, FunnelState, Lead } from "@/lib/types";
import ProgressBar from "@/components/ProgressBar";
import StepRenderer from "@/components/StepRenderer";

const STORAGE_KEY = "qa_funnel_state";

const getInitialState = (): FunnelState => {
  if (typeof window !== "undefined") {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as FunnelState;
        return {
          stepIndex: parsed.stepIndex ?? 0,
          answers: parsed.answers ?? {},
          lead: parsed.lead
        };
      } catch {
        return { stepIndex: 0, answers: {} };
      }
    }
  }
  return { stepIndex: 0, answers: {} };
};

const reducer = (state: FunnelState, action: FunnelAction): FunnelState => {
  switch (action.type) {
    case "ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.stepId]: action.value
        }
      };
    case "NEXT":
      return {
        ...state,
        stepIndex: Math.min(state.stepIndex + 1, steps.length - 1)
      };
    case "PREV":
      return {
        ...state,
        stepIndex: Math.max(state.stepIndex - 1, 0)
      };
    case "SET_LEAD":
      return {
        ...state,
        lead: action.lead
      };
    default:
      return state;
  }
};

export default function Funnel() {
  const [state, dispatch] = useReducer(reducer, undefined, getInitialState);
  const step = steps[state.stepIndex];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
  }, [state]);

  const hasAnswer = useMemo(() => {
    if (step.type === "lead") {
      return Boolean(state.lead?.name && state.lead?.whatsapp && state.lead?.consent);
    }
    if (step.type === "choice") {
      return Boolean(state.answers[step.id]);
    }
    return true;
  }, [state.answers, state.lead, step]);

  const handleAnswer = (value: string) => {
    dispatch({ type: "ANSWER", stepId: step.id, value });
    if (step.type === "choice") {
      dispatch({ type: "NEXT" });
    }
  };

  const handleLeadSubmit = (lead: Lead) => {
    dispatch({ type: "SET_LEAD", lead });
    console.log("Lead capturado", lead);
    dispatch({ type: "NEXT" });
  };

  const handleNext = () => {
    dispatch({ type: "NEXT" });
  };

  const handlePrev = () => {
    dispatch({ type: "PREV" });
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-6">
          <ProgressBar current={state.stepIndex + 1} total={steps.length} />

          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <StepRenderer
                step={step}
                answers={state.answers}
                lead={state.lead}
                onAnswer={handleAnswer}
                onLeadSubmit={handleLeadSubmit}
                onNext={handleNext}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={handlePrev}
          disabled={state.stepIndex === 0}
          className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-brand-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          Voltar
        </button>
        {step.layout !== "whatsappMock" && step.layout !== "panel" && (
          <button
            type="button"
            onClick={handleNext}
            disabled={!hasAnswer || step.type === "choice"}
            className="rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-brand-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Continuar
          </button>
        )}
      </div>
    </div>
  );
}
