const policies = [
  {
    name: "Tenant Runtime Isolation",
    status: "Enforced",
    scope: "Global",
  },
  {
    name: "Feature Flag Governance",
    status: "Enforced",
    scope: "Tenant",
  },
  {
    name: "Runtime Entitlement Validation",
    status: "Enforced",
    scope: "Organization",
  },
  {
    name: "Change Approval Workflow",
    status: "Review Required",
    scope: "Enterprise",
  },
];

export default function RuntimePolicyGovernance() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Policy Governance
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Enterprise policy enforcement across tenant isolation,
          feature management, entitlement validation, and change controls.
        </p>
      </div>

      <div className="space-y-4">
        {policies.map((policy) => (
          <div
            key={policy.name}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  {policy.name}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Scope: {policy.scope}
                </div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  policy.status === "Enforced"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-amber-500/20 text-amber-400"
                }`}
              >
                {policy.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}