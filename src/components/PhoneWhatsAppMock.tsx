"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

type Message =
  | {
      id: string;
      type: "audio";
      duration: string;
      audioUrl?: string;
    }
  | {
      id: string;
      type: "text";
      text: string;
    };

const messages: Message[] = [
  {
    id: "audio-1",
    type: "audio",
    duration: "0:22",
    audioUrl: ""
  },
  {
    id: "text-1",
    type: "text",
    text: "Olha isso…"
  },
  {
    id: "audio-2",
    type: "audio",
    duration: "0:18",
    audioUrl: ""
  },
  {
    id: "text-2",
    type: "text",
    text: "Faz sentido pro seu perfil."
  },
  {
    id: "audio-3",
    type: "audio",
    duration: "0:34",
    audioUrl: ""
  },
  {
    id: "audio-4",
    type: "audio",
    duration: "0:26",
    audioUrl: ""
  }
];

const buildWave = () => Array.from({ length: 18 }, () => 4 + Math.random() * 10);

export default function PhoneWhatsAppMock() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [now, setNow] = useState(new Date());

  const timeLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit"
      }).format(now),
    [now]
  );

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeouts = messages.map((_, index) =>
      window.setTimeout(() => setVisibleCount(index + 1), 800 + index * 700)
    );
    return () => timeouts.forEach((timeout) => window.clearTimeout(timeout));
  }, []);

  return (
    <div className="mx-auto w-full max-w-sm rounded-[40px] border border-slate-800 bg-slate-900/70 p-4 shadow-card">
      <div className="rounded-[32px] border border-slate-800 bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3 text-xs text-slate-300">
          <span>{timeLabel}</span>
          <span className="rounded-full border border-slate-700 px-2 py-0.5 text-[10px]">4G</span>
        </div>
        <div className="bg-gradient-to-br from-emerald-900/30 via-slate-950 to-slate-950 px-4 py-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-emerald-400/80 to-emerald-600/80" />
            <div>
              <p className="text-sm font-semibold text-white">Painel Terrenos QA</p>
              <p className="text-[11px] text-emerald-200/80">Online agora</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {messages.slice(0, visibleCount).map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="self-start rounded-2xl rounded-tl-none border border-emerald-800/40 bg-emerald-500/10 px-4 py-3"
              >
                {message.type === "text" ? (
                  <p className="text-sm text-emerald-100">{message.text}</p>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/80 text-slate-950">
                      <span className="text-xs font-bold">▶</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {buildWave().map((height, index) => (
                        <span
                          key={`${message.id}-${index}`}
                          className="inline-block w-1 rounded-full bg-emerald-200/80"
                          style={{ height }}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-emerald-100/80">{message.duration}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-emerald-200/70">
            *Insira URLs reais de áudio no array <code>messages</code> (campo
            <code> audioUrl</code>) quando integrar.
          </p>
        </div>
      </div>
    </div>
  );
}
