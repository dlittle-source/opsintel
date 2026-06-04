const modernizationItems = [
  {
    area: "Workspace Architecture",
    recommendation: "Move from one-page dashboard stacking to route-based SaaS workspaces.",
    businessValue:
      "Improves scalability, user experience, client demos, and white-label packaging.",
  },
  {
    area: "AI Advisory Layer",
    recommendation:
      "Convert static recommendations into future OpenAI-generated advisory summaries.",
    businessValue:
      "Creates a premium consulting-style intelligence layer for monetization.",
  },
  {
    area: "Client Packaging",
    recommendation:
      "Add exportable executive reports for architecture reviews and infrastructure planning.",
    businessValue:
      "Supports consulting offers, paid audits, and client-facing deliverables.",
  },
];

export default function AIModernizationAdvisoryEngine() {
  return (
    <section className="rounded-3xl border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-slate-950 to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Modernization Advisory
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            AI Modernization Advisory Engine
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Converts platform observations into strategic modernization guidance
            for SaaS evolution, client packaging, and enterprise AI advisory
            workflows.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-4 text-sm font-semibold text-amber-200">
          Strategic Guidance Active
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {modernizationItems.map((item) => (
          <div
            key={item.area}
            className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5"
          >
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {item.area}
            </p>

            <h3 className="mt-3 text-base font-bold text-white">
              {item.recommendation}
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              {item.businessValue}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}