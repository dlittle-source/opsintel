import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function DeploymentFlowPanel({ architecture }: Props) {
  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <h2 className="text-lg font-semibold text-white">Deployment Flow</h2>

      <p className="mt-1 text-sm text-slate-400">
        Generated DevOps delivery sequence for this architecture.
      </p>

      <div className="mt-5 grid gap-3 md:grid-cols-5">
        {architecture.deploymentFlow.map((step, index) => (
          <div
            key={step}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950">
              {index + 1}
            </div>

            <p className="text-sm font-medium text-slate-200">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}