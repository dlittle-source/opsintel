const scoringItems = [
  { label: "Enterprise UX", score: 94 },
  { label: "AI Intelligence Layer", score: 91 },
  { label: "Monetization Readiness", score: 92 },
  { label: "White-Label Potential", score: 90 },
];

export default function ExecutiveArchitectureScoringPanel() {
  return (
    <section className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-slate-950 to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Architecture Scoring
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Executive Platform Readiness Score
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Measures enterprise presentation quality, AI intelligence maturity,
            monetization positioning, and white-label product potential.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-6 py-4 text-center">
          <p className="text-xs uppercase tracking-widest text-emerald-300">
            Overall Score
          </p>
          <p className="mt-1 text-3xl font-bold text-white">92%</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {scoringItems.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-200">
                {item.label}
              </p>
              <p className="text-sm font-bold text-cyan-300">{item.score}%</p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-cyan-400"
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}