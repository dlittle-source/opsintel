import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function MetricsPanel({ architecture }: Props) {
  const metrics = [
    {
      label: "Production Readiness",
      value: `${architecture.productionReadinessScore}/100`,
      detail: "AI-generated confidence score",
    },
    {
      label: "Complexity",
      value: architecture.estimatedComplexity,
      detail: "Infrastructure delivery difficulty",
    },
    {
      label: "Stack Services",
      value: architecture.stack.length,
      detail: "Technologies included",
    },
    {
      label: "Security Checks",
      value: architecture.securityRecommendations.length,
      detail: "Recommended controls",
    },
  ];

  return (
    <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-xl"
        >
          <p className="text-sm text-slate-400">{metric.label}</p>
          <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
          <p className="mt-1 text-xs text-slate-500">{metric.detail}</p>
        </div>
      ))}
    </section>
  );
}