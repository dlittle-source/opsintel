const exceptions = [
  {
    issue: "Partner Branding Validation",
    owner: "White-Label Services",
    severity: "High",
  },
  {
    issue: "Administrator Access Review",
    owner: "Security Governance",
    severity: "Medium",
  },
  {
    issue: "Runtime Policy Drift",
    owner: "Platform Operations",
    severity: "Medium",
  },
  {
    issue: "Tenant Entitlement Mismatch",
    owner: "Licensing Services",
    severity: "Low",
  },
];

export default function RuntimeExceptionCenter() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Exception Center
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Governance exceptions requiring review and remediation across runtime
          operations, licensing, and white-label services.
        </p>
      </div>

      <div className="space-y-4">
        {exceptions.map((exception) => (
          <div
            key={exception.issue}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-white">
                  {exception.issue}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  Owner: {exception.owner}
                </div>
              </div>

              <div
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  exception.severity === "Low"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : exception.severity === "Medium"
                      ? "bg-amber-500/20 text-amber-400"
                      : "bg-rose-500/20 text-rose-400"
                }`}
              >
                {exception.severity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}