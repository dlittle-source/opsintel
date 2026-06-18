export default function RuntimeGovernanceOverview() {
  const governanceMetrics = [
    {
      title: "Active Policies",
      value: "128",
      description: "Runtime governance policies enforced",
    },
    {
      title: "Access Reviews",
      value: "42",
      description: "Pending entitlement and access reviews",
    },
    {
      title: "Change Requests",
      value: "16",
      description: "Runtime modifications awaiting approval",
    },
    {
      title: "Audit Exceptions",
      value: "5",
      description: "Outstanding governance exceptions",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Runtime Governance Overview
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Enterprise runtime governance visibility across policy enforcement,
          access reviews, change approvals, and audit exceptions.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {governanceMetrics.map((metric) => (
          <div
            key={metric.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="text-sm text-slate-400">
              {metric.title}
            </div>

            <div className="mt-3 text-3xl font-bold text-white">
              {metric.value}
            </div>

            <div className="mt-2 text-sm text-slate-500">
              {metric.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}