import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function ArchitectureReportPanel({ architecture }: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            AI Architecture Report
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Executive-level deployment assessment generated from the architecture.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          Report Ready
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="text-sm font-semibold text-cyan-300">
            Executive Summary
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            {architecture.summary}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="text-sm font-semibold text-orange-300">
            Operational Risk
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            This architecture is currently rated as{" "}
            <span className="font-semibold text-orange-300">
              {architecture.riskLevel}
            </span>{" "}
            risk with a deployment confidence of{" "}
            <span className="font-semibold text-emerald-300">
              {architecture.deploymentConfidence}%
            </span>.
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
          <h3 className="text-sm font-semibold text-emerald-300">
            Production Readiness
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            The production readiness score is{" "}
            <span className="font-semibold text-emerald-300">
              {architecture.productionReadinessScore}/100
            </span>{" "}
            with an estimated complexity of{" "}
            <span className="font-semibold text-cyan-300">
              {architecture.estimatedComplexity}
            </span>.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <h3 className="text-sm font-semibold text-white">
          Deployment Assessment
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {architecture.infrastructureSummary}
        </p>
      </div>
    </section>
  );
}