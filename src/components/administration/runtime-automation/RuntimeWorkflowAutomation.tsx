const workflows = [
  {
    name: "Deployment Workflow",
    status: "Active",
    trigger: "CI/CD Pipeline",
  },
  {
    name: "Infrastructure Validation",
    status: "Active",
    trigger: "Runtime Health Events",
  },
  {
    name: "Tenant Provisioning",
    status: "Queued",
    trigger: "Customer Activation",
  },
  {
    name: "Compliance Workflow",
    status: "Active",
    trigger: "Policy Engine",
  },
];

export default function RuntimeWorkflowAutomation() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Workflow Automation
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Workflow orchestration coordinates runtime activities across
          deployment, provisioning, validation, and compliance domains.
        </p>
      </div>

      <div className="space-y-4">
        {workflows.map((workflow) => (
          <div
            key={workflow.name}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div>
              <h4 className="font-medium text-cyan-300">
                {workflow.name}
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                Trigger Source: {workflow.trigger}
              </p>
            </div>

            <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
              {workflow.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}