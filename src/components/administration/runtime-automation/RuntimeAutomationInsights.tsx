const insights = [
  {
    title: "Automation Coverage",
    value: "92%",
  },
  {
    title: "Successful Executions",
    value: "14,382",
  },
  {
    title: "Remediation Success Rate",
    value: "98.7%",
  },
  {
    title: "Escalation Accuracy",
    value: "99.2%",
  },
];

export default function RuntimeAutomationInsights() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Automation Insights
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Operational analytics provide visibility into execution quality,
          automation coverage, remediation efficiency, and escalation accuracy.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {insights.map((insight) => (
          <div
            key={insight.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <p className="text-sm text-slate-400">
              {insight.title}
            </p>

            <p className="mt-3 text-2xl font-semibold text-cyan-300">
              {insight.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}