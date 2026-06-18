const auditEvents = [
  {
    category: "Policy Enforcement",
    event: "Tenant isolation verified",
    severity: "Low",
  },
  {
    category: "Access Governance",
    event: "Administrator role review overdue",
    severity: "Medium",
  },
  {
    category: "Change Management",
    event: "Licensing revision awaiting approval",
    severity: "Medium",
  },
  {
    category: "Compliance",
    event: "Partner branding exception detected",
    severity: "High",
  },
];

export default function RuntimeAuditGovernance() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Audit Governance
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Runtime governance audit events across policy enforcement, access
          reviews, change approvals, and compliance activities.
        </p>
      </div>

      <div className="space-y-4">
        {auditEvents.map((event) => (
          <div
            key={event.event}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  {event.category}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  {event.event}
                </div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  event.severity === "Low"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : event.severity === "Medium"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {event.severity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}