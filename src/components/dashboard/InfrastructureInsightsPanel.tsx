import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function InfrastructureInsightsPanel({
  architecture,
}: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Infrastructure Intelligence
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            AI-generated operational analysis and deployment assessment.
          </p>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
          AI Analysis Active
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Estimated Monthly Cost</p>

          <p className="mt-2 text-2xl font-bold text-white">
            {architecture.estimatedMonthlyCost}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Risk Level</p>

          <p className="mt-2 text-2xl font-bold text-orange-300">
            {architecture.riskLevel}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">
            Deployment Confidence
          </p>

          <p className="mt-2 text-2xl font-bold text-emerald-300">
            {architecture.deploymentConfidence}%
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">
            Infrastructure Complexity
          </p>

          <p className="mt-2 text-2xl font-bold text-cyan-300">
            {architecture.estimatedComplexity}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-5">
        <h3 className="text-sm font-semibold text-white">
          AI Infrastructure Summary
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          {architecture.infrastructureSummary}
        </p>
      </div>
    </section>
  );
}