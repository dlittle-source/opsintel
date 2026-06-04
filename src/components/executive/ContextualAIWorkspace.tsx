"use client";

import { useState } from "react";

const focusModes = [
  {
    id: "operations",
    title: "Operational Focus",
    summary:
      "Prioritize telemetry systems, infrastructure health, deployment stability, and operational monitoring.",
    recommendations: [
      "Increase telemetry visibility across deployment regions.",
      "Review deployment rollback readiness for production workloads.",
      "Validate operational alert escalation routing.",
    ],
  },
  {
    id: "security",
    title: "Security Focus",
    summary:
      "Prioritize threat intelligence, governance posture, executive risk visibility, and operational security systems.",
    recommendations: [
      "Review executive governance policy alignment.",
      "Expand AI threat intelligence monitoring coverage.",
      "Validate operational risk mitigation workflows.",
    ],
  },
  {
    id: "deployment",
    title: "Deployment Focus",
    summary:
      "Prioritize release orchestration, resiliency analysis, deployment validation, and rollback confidence.",
    recommendations: [
      "Improve deployment validation checkpoints.",
      "Increase resiliency simulation frequency.",
      "Optimize rollback automation procedures.",
    ],
  },
  {
    id: "business",
    title: "Business Focus",
    summary:
      "Prioritize cloud optimization, executive readiness, operational efficiency, and strategic infrastructure visibility.",
    recommendations: [
      "Reduce projected cloud infrastructure costs.",
      "Expand multi-cloud operational visibility.",
      "Improve executive operational reporting alignment.",
    ],
  },
];

export default function ContextualAIWorkspace() {
  const [activeFocus, setActiveFocus] =
    useState<string>("operations");

  const currentFocus =
    focusModes.find(
      (mode) => mode.id === activeFocus
    ) || focusModes[0];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Contextual AI Workspace
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Adaptive Executive Intelligence
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            AI operational systems dynamically prioritize
            infrastructure intelligence based on executive
            operational focus, governance visibility, deployment
            readiness, and enterprise infrastructure conditions.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          CONTEXT-AWARE AI
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-950/70
            p-5
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                AI Focus Modes
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Executive Context
              </h3>
            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              ACTIVE
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {focusModes.map((mode) => {
              const active =
                activeFocus === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() =>
                    setActiveFocus(mode.id)
                  }
                  className={`
                    w-full
                    rounded-2xl
                    border
                    p-4
                    text-left
                    transition-all
                    duration-300
                    ${
                      active
                        ? "border-cyan-500/30 bg-cyan-500/10"
                        : "border-slate-800 bg-black/20 hover:border-slate-700"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-base font-semibold text-white">
                      {mode.title}
                    </h4>

                    <div
                      className={`
                        h-2.5
                        w-2.5
                        rounded-full
                        ${
                          active
                            ? "bg-cyan-400"
                            : "bg-slate-700"
                        }
                      `}
                    />
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {mode.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-gradient-to-br
            from-slate-950
            via-slate-900
            to-slate-950
            p-8
            shadow-2xl
          "
        >
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative z-10">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Active AI Operational Context
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-tight text-white">
                  {currentFocus.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {currentFocus.summary}
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-black/30 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  AI Workspace State
                </p>

                <div className="mt-3 text-4xl font-black text-white">
                  ACTIVE
                </div>

                <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  CONTEXT ENGINE ONLINE
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  AI Context Accuracy
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  93%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[93%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Executive Alignment
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  96%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[96%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Operational Adaptation
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  91%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[91%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                    AI Recommendations
                  </p>

                  <h4 className="mt-2 text-2xl font-bold text-white">
                    Executive Operational Guidance
                  </h4>
                </div>

                <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  DYNAMIC
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {currentFocus.recommendations.map(
                  (recommendation) => (
                    <div
                      key={recommendation}
                      className="
                        flex
                        items-start
                        gap-4
                        rounded-2xl
                        border
                        border-slate-800
                        bg-black/20
                        p-4
                      "
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />

                      <p className="text-sm leading-6 text-slate-300">
                        {recommendation}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}