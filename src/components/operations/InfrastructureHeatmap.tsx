"use client";

import {
  Activity,
  AlertTriangle,
  Flame,
  Gauge,
  Layers3,
  Server,
  ThermometerSun,
} from "lucide-react";

import { GeneratedArchitecture } from "@/types/architecture";

import {
  generateInfrastructureHeatmap,
  HeatmapRiskLevel,
  InfrastructureHeatmapNode,
} from "@/lib/infrastructureHeatmapEngine";

type Props = {
  architecture: GeneratedArchitecture;
};

function riskStyles(riskLevel: HeatmapRiskLevel) {
  switch (riskLevel) {
    case "critical":
      return "border-red-500/40 bg-red-500/15 text-red-300";
    case "high":
      return "border-orange-500/40 bg-orange-500/15 text-orange-300";
    case "medium":
      return "border-yellow-500/40 bg-yellow-500/15 text-yellow-300";
    default:
      return "border-emerald-500/30 bg-emerald-500/10 text-emerald-300";
  }
}

function HeatmapNodeCard({ node }: { node: InfrastructureHeatmapNode }) {
  return (
    <div className={`rounded-2xl border p-4 ${riskStyles(node.riskLevel)}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Server className="h-4 w-4" />
            <span>{node.serviceName}</span>
          </div>

          <div className="mt-2 text-xs uppercase tracking-wide opacity-70">
            {node.serviceType || "cloud service"}
          </div>
        </div>

        <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase">
          {node.riskLevel}
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs opacity-80">
          <span>Stress Score</span>
          <span>{node.stressScore}%</span>
        </div>

        <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/30">
          <div
            className="h-full rounded-full bg-current"
            style={{ width: `${node.stressScore}%` }}
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {node.signals.map((signal) => (
          <div
            key={signal}
            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs"
          >
            {signal}
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3 text-xs">
        {node.recommendedAction}
      </div>
    </div>
  );
}

export default function InfrastructureHeatmap({ architecture }: Props) {
  const heatmap = generateInfrastructureHeatmap(architecture);

  return (
    <section className="mt-6 rounded-3xl border border-orange-500/10 bg-gradient-to-br from-slate-950 via-black to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <div className="flex items-center gap-2 text-orange-300">
            <ThermometerSun className="h-5 w-5" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em]">
              PHASE 5P
            </span>
          </div>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Infrastructure Heatmap Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
            Real-time infrastructure stress visualization showing service
            pressure, dependency risk, cloud saturation, and operational hot
            zones across the generated architecture.
          </p>
        </div>

        <div
          className={`rounded-2xl border px-5 py-4 shadow-xl ${riskStyles(
            heatmap.overallRiskLevel
          )}`}
        >
          <div className="text-xs uppercase tracking-[0.25em] opacity-70">
            Overall Risk
          </div>

          <div className="mt-2 text-2xl font-bold capitalize">
            {heatmap.overallRiskLevel}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="flex items-center gap-2 text-slate-400">
            <Gauge className="h-4 w-4" />
            <span className="text-sm">Overall Stress</span>
          </div>

          <div className="mt-3 text-3xl font-bold text-white">
            {heatmap.overallStressScore}%
          </div>

          <div className="mt-2 text-xs text-slate-500">
            Average service pressure score
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="flex items-center gap-2 text-slate-400">
            <Server className="h-4 w-4" />
            <span className="text-sm">Mapped Services</span>
          </div>

          <div className="mt-3 text-3xl font-bold text-white">
            {heatmap.nodes.length}
          </div>

          <div className="mt-2 text-xs text-slate-500">
            Services included in heatmap
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="flex items-center gap-2 text-slate-400">
            <Flame className="h-4 w-4" />
            <span className="text-sm">Hot Zones</span>
          </div>

          <div className="mt-3 text-3xl font-bold text-white">
            {
              heatmap.nodes.filter(
                (node) =>
                  node.riskLevel === "high" || node.riskLevel === "critical"
              ).length
            }
          </div>

          <div className="mt-2 text-xs text-slate-500">
            Services under high pressure
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="flex items-center gap-2 text-slate-400">
            <Layers3 className="h-4 w-4" />
            <span className="text-sm">Clusters</span>
          </div>

          <div className="mt-3 text-3xl font-bold text-white">
            {heatmap.clusters.length}
          </div>

          <div className="mt-2 text-xs text-slate-500">
            AI-grouped pressure zones
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-orange-300" />

            <h3 className="text-lg font-semibold text-white">
              Service Stress Heatmap
            </h3>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {heatmap.nodes.map((node) => (
              <HeatmapNodeCard key={node.id} node={node} />
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-300" />

              <h3 className="text-lg font-semibold text-white">
                AI Pressure Clusters
              </h3>
            </div>

            <div className="mt-5 space-y-4">
              {heatmap.clusters.map((cluster) => (
                <div
                  key={cluster.id}
                  className={`rounded-2xl border p-4 ${riskStyles(
                    cluster.riskLevel
                  )}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold">{cluster.name}</div>

                    <div className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase">
                      {cluster.riskLevel}
                    </div>
                  </div>

                  <div className="mt-3 text-sm opacity-90">
                    {cluster.summary}
                  </div>

                  <div className="mt-4 text-xs uppercase tracking-wide opacity-70">
                    Avg Stress: {cluster.averageStressScore}%
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {cluster.affectedServices.length === 0 ? (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                        No affected services
                      </span>
                    ) : (
                      cluster.affectedServices.map((service) => (
                        <span
                          key={service}
                          className="rounded-full border border-white/10 px-3 py-1 text-xs"
                        >
                          {service}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-500/10 bg-orange-500/5 p-5">
            <div className="text-sm uppercase tracking-[0.3em] text-orange-300">
              Executive Heatmap Summary
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {heatmap.executiveSummary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}