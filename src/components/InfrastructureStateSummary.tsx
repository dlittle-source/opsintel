"use client";

import { useEffect, useState } from "react";

type StateItem = {
  label: string;
  status: "online" | "degraded" | "scaling" | "recovering";
  count: number;
};

const statePool: StateItem[] = [
  { label: "Online Services", status: "online", count: 18 },
  { label: "Degraded Services", status: "degraded", count: 2 },
  { label: "Scaling Events", status: "scaling", count: 4 },
  { label: "Recovery Actions", status: "recovering", count: 1 },
];

export default function InfrastructureStateSummary() {
  const [states, setStates] = useState<StateItem[]>(statePool);

  useEffect(() => {
    const interval = setInterval(() => {
      setStates([
        {
          label: "Online Services",
          status: "online",
          count: Math.floor(16 + Math.random() * 6),
        },
        {
          label: "Degraded Services",
          status: "degraded",
          count: Math.floor(Math.random() * 4),
        },
        {
          label: "Scaling Events",
          status: "scaling",
          count: Math.floor(2 + Math.random() * 5),
        },
        {
          label: "Recovery Actions",
          status: "recovering",
          count: Math.floor(Math.random() * 3),
        },
      ]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const statusStyles = {
    online: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    degraded: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    scaling: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    recovering: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  };

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-2xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure State Summary
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Animated operational state tracking across infrastructure services.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          State Engine Active
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {states.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all duration-300 hover:border-slate-700"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-slate-400">{item.label}</p>

              <span
                className={`rounded-full border px-2 py-1 text-[10px] uppercase tracking-wider ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>

            <div className="text-3xl font-bold text-white">
              {item.count}
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Live infrastructure state
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}