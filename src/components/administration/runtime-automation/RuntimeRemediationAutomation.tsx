const remediationActions = [
  {
    action: "Restart Runtime Services",
    scope: "Platform Runtime",
    status: "Ready",
  },
  {
    action: "Container Recovery",
    scope: "Workload Layer",
    status: "Active",
  },
  {
    action: "Policy Reconciliation",
    scope: "Governance Engine",
    status: "Ready",
  },
  {
    action: "Resource Optimization",
    scope: "Infrastructure Layer",
    status: "Queued",
  },
];

export default function RuntimeRemediationAutomation() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Remediation Automation
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Automated remediation capabilities provide self-healing mechanisms
          across runtime services, workloads, policies, and infrastructure.
        </p>
      </div>

      <div className="space-y-4">
        {remediationActions.map((item) => (
          <div
            key={item.action}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {item.action}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Scope: {item.scope}
                </p>
              </div>

              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                {item.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}