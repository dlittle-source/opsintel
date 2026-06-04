"use client";

import { useState } from "react";

type TabKey =
  | "operations"
  | "security"
  | "architecture"
  | "business";

const tabs: {
  id: TabKey;
  label: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
  }[];
}[] = [
  {
    id: "operations",
    label: "Operations",
    title: "Operational Intelligence Systems",
    description:
      "Real-time operational visibility across infrastructure telemetry, incidents, deployment activity, and service monitoring systems.",
    metrics: [
      {
        label: "Infrastructure Health",
        value: "98%",
      },
      {
        label: "Incident Stability",
        value: "94%",
      },
      {
        label: "Telemetry Coverage",
        value: "91%",
      },
    ],
  },
  {
    id: "security",
    label: "Security",
    title: "Security & Governance Systems",
    description:
      "Executive-level governance visibility with AI threat detection, infrastructure posture analysis, and operational risk monitoring.",
    metrics: [
      {
        label: "Threat Visibility",
        value: "89%",
      },
      {
        label: "Governance Alignment",
        value: "93%",
      },
      {
        label: "Risk Reduction",
        value: "87%",
      },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    title: "Infrastructure Architecture Intelligence",
    description:
      "Deployment strategy analysis, rollback validation, topology visualization, and resiliency assessment systems.",
    metrics: [
      {
        label: "Resiliency Confidence",
        value: "92%",
      },
      {
        label: "Rollback Readiness",
        value: "95%",
      },
      {
        label: "Deployment Stability",
        value: "90%",
      },
    ],
  },
  {
    id: "business",
    label: "Business",
    title: "Business & Cloud Intelligence",
    description:
      "Cloud strategy visibility with executive advisory systems, multi-cloud analysis, and infrastructure cost optimization.",
    metrics: [
      {
        label: "Cost Optimization",
        value: "84%",
      },
      {
        label: "Cloud Efficiency",
        value: "88%",
      },
      {
        label: "Strategic Readiness",
        value: "91%",
      },
    ],
  },
];

export default function ExecutiveSystemTabs() {
  const [activeTab, setActiveTab] =
    useState<TabKey>("operations");

  const currentTab =
    tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Executive Operational Workspace
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Modular Intelligence Systems
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The executive operations console is evolving into a
            modular AI intelligence workspace with grouped
            operational systems and premium command-center
            navigation behavior.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          AI COMMAND CENTER
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          const active = tab.id === activeTab;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                rounded-2xl
                border
                px-5
                py-3
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  active
                    ? "border-cyan-500/30 bg-cyan-500/15 text-cyan-200 shadow-lg shadow-cyan-500/10"
                    : "border-slate-800 bg-slate-900/70 text-slate-400 hover:border-slate-700 hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}
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
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-500 blur-3xl" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Active Intelligence Domain
              </p>

              <h3 className="mt-4 text-4xl font-black tracking-tight text-white">
                {currentTab.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                {currentTab.description}
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-black/30 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Active Zone
              </p>

              <div className="mt-3 text-3xl font-black text-white">
                {currentTab.label}
              </div>

              <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                SYSTEMS ONLINE
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {currentTab.metrics.map((metric) => (
              <div
                key={metric.label}
                className="
                  rounded-2xl
                  border
                  border-slate-800
                  bg-black/20
                  p-5
                  backdrop-blur-sm
                "
              >
                <p className="text-sm text-slate-400">
                  {metric.label}
                </p>

                <div className="mt-4 text-4xl font-black text-white">
                  {metric.value}
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                    style={{
                      width: metric.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}