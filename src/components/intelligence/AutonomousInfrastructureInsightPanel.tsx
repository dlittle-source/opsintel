const insights = [
  {
    signal: "Workspace Architecture",
    status: "Optimized",
    insight:
      "Executive workspace segmentation improves clarity, scalability, and operational visibility across the platform.",
  },
  {
    signal: "Commercial Readiness",
    status: "Strong",
    insight:
      "Executive presentation quality, monetization positioning, and white-label readiness support commercial adoption.",
  },
  {
    signal: "Product Direction",
    status: "High Potential",
    insight:
      "OpsIntel is positioned as a premium executive infrastructure intelligence platform suitable for SaaS, consulting, and white-label delivery models.",
  },
];

export default function AutonomousInfrastructureInsightPanel() {
  return (
    <section className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-slate-950 to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Autonomous Insights
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Executive Infrastructure Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Simulated AI intelligence continuously evaluates platform readiness,
            operational posture, commercialization potential, and executive
            decision support opportunities.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-5 py-4 text-sm font-semibold text-emerald-200">
          Autonomous Analysis Complete
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {insights.map((item) => (
          <div
            key={item.signal}
            className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {item.signal}
            </p>

            <p className="mt-3 text-sm font-semibold text-emerald-300">
              {item.status}
            </p>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.insight}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}