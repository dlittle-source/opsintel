const recommendations = [
  {
    priority: "High",
    title: "Segment the dashboard into route-based enterprise workspaces",
    impact:
      "Reduces dashboard fatigue and creates a stronger SaaS product structure.",
  },
  {
    priority: "Medium",
    title: "Package advisory insights into client-facing summary cards",
    impact:
      "Improves demo value for consulting, white-label, and portfolio presentations.",
  },
  {
    priority: "Medium",
    title: "Add future AI-generated modernization recommendations",
    impact:
      "Positions the platform as an intelligent architecture advisory engine.",
  },
];

export default function AIExecutiveRecommendationFeed() {
  return (
    <section className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-400/10 via-slate-950 to-slate-900 p-6 shadow-2xl">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            AI Recommendations
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
            Executive Recommendation Feed
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
            Prioritized AI-style recommendations designed to guide platform
            evolution, architecture decisions, SaaS readiness, and monetization
            strategy.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 px-5 py-4 text-sm font-semibold text-violet-200">
          3 Active Recommendations
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {recommendations.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">
                  {item.priority} Priority
                </p>

                <h3 className="mt-2 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.impact}
                </p>
              </div>

              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200">
                AI Suggested
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}