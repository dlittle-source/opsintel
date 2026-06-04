"use client";

import { useState } from "react";

const workspaceRegions = [
  {
    id: "operations",
    title: "Operational Systems",
    description:
      "Infrastructure telemetry, incident monitoring, deployment systems, and operational visibility.",
    status: "ACTIVE",
  },
  {
    id: "security",
    title: "Security Intelligence",
    description:
      "Threat visibility, governance analysis, operational risk posture, and executive security systems.",
    status: "SECURE",
  },
  {
    id: "deployment",
    title: "Deployment Intelligence",
    description:
      "Deployment orchestration, rollback readiness, resiliency analysis, and release stability systems.",
    status: "OPTIMIZED",
  },
  {
    id: "business",
    title: "Business Intelligence",
    description:
      "Cost optimization, multi-cloud visibility, strategic readiness, and executive AI advisory systems.",
    status: "SCALING",
  },
];

export default function AdaptiveExecutiveWorkspace() {
  const [expandedRegion, setExpandedRegion] =
    useState<string>("operations");

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            Adaptive Executive Workspace
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Enterprise Operational Workspace
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The executive operations platform now supports
            adaptive intelligence regions, modular operational
            visibility, and enterprise command-center workspace
            behavior for centralized infrastructure governance.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          ADAPTIVE AI WORKSPACE
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
                Workspace Regions
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Intelligence Zones
              </h3>
            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              LIVE
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {workspaceRegions.map((region) => {
              const active =
                expandedRegion === region.id;

              return (
                <button
                  key={region.id}
                  onClick={() =>
                    setExpandedRegion(region.id)
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
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {region.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {region.description}
                      </p>
                    </div>

                    <div
                      className={`
                        rounded-full
                        border
                        px-2.5
                        py-1
                        text-[10px]
                        font-semibold
                        tracking-wider
                        ${
                          active
                            ? "border-cyan-500/20 bg-cyan-500/10 text-cyan-300"
                            : "border-slate-700 bg-slate-900 text-slate-400"
                        }
                      `}
                    >
                      {region.status}
                    </div>
                  </div>
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
                  Active Executive Region
                </p>

                <h3 className="mt-4 text-4xl font-black tracking-tight text-white">
                  {
                    workspaceRegions.find(
                      (region) =>
                        region.id === expandedRegion
                    )?.title
                  }
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400">
                  {
                    workspaceRegions.find(
                      (region) =>
                        region.id === expandedRegion
                    )?.description
                  }
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-500/20 bg-black/30 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Workspace Status
                </p>

                <div className="mt-3 text-4xl font-black text-white">
                  ACTIVE
                </div>

                <div className="mt-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  EXECUTIVE SYSTEMS ONLINE
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Intelligence Coverage
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  94%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  Operational Stability
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  97%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[97%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-black/20 p-5">
                <p className="text-sm text-slate-400">
                  AI Executive Readiness
                </p>

                <div className="mt-4 text-5xl font-black text-white">
                  92%
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Executive Workspace Intelligence
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                The adaptive executive workspace dynamically
                consolidates infrastructure intelligence systems
                into centralized operational regions designed for
                enterprise governance, deployment visibility,
                resiliency analysis, and AI operational oversight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}