import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function DeploymentRunbookPanel({ architecture }: Props) {
  const runbookSteps = [
    "Review generated architecture and confirm services.",
    "Create required environment variables and secrets.",
    "Containerize application services with Docker.",
    "Configure CI/CD workflow for automated deployment.",
    "Provision cloud infrastructure and security groups.",
    "Configure reverse proxy and production routing.",
    "Validate health checks and application endpoints.",
    "Enable monitoring, logging, and alerting.",
  ];

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Deployment Runbook
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Generated operational checklist for moving this architecture toward production.
          </p>
        </div>

        <div className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs text-orange-300">
          Execution Plan
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {runbookSteps.map((step, index) => (
          <div
            key={step}
            className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-sm font-bold text-slate-950">
              {index + 1}
            </div>

            <div>
              <p className="text-sm font-medium text-slate-200">{step}</p>

              {index < architecture.deploymentFlow.length && (
                <p className="mt-1 text-xs text-slate-500">
                  Related flow: {architecture.deploymentFlow[index]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}