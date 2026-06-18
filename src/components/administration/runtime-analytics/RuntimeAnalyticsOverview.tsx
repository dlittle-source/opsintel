const analyticsDomains = [
  {
    title: "Trend Analysis",
    description:
      "Continuously evaluates operational patterns and runtime behavior.",
  },
  {
    title: "Capacity Intelligence",
    description:
      "Monitors infrastructure utilization and growth requirements.",
  },
  {
    title: "Performance Analytics",
    description:
      "Measures runtime efficiency and service responsiveness.",
  },
  {
    title: "Forecasting",
    description:
      "Projects future runtime demand and operational conditions.",
  },
];

export default function RuntimeAnalyticsOverview() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Analytics Overview
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Analytics services transform runtime telemetry into actionable
          operational intelligence for enterprise environments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {analyticsDomains.map((domain) => (
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