const automationDomains = [
  {
    title: "Workflow Automation",
    description:
      "Coordinates operational workflows across runtime services and tenant environments.",
  },
  {
    title: "Remediation Automation",
    description:
      "Executes automated corrective actions based on runtime intelligence and policy rules.",
  },
  {
    title: "Scheduling Services",
    description:
      "Manages recurring jobs, maintenance windows, and runtime execution timing.",
  },
  {
    title: "Approval Pipelines",
    description:
      "Provides governance-aware approval flows before automation execution.",
  },
];

export default function RuntimeAutomationOverview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Automation Overview
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Enterprise automation capabilities operate under tenant-aware policies
          while preserving governance and operational controls.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {automationDomains.map((domain) => (
          <div
            key={domain.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <h4 className="font-medium text-cyan-300">
              {domain.title}
            </h4>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {domain.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}