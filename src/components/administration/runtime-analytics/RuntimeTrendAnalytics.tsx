const trends = [
  {
    metric: "CPU Utilization",
    trend: "+4.2%",
    direction: "Increasing",
  },
  {
    metric: "Memory Consumption",
    trend: "-1.8%",
    direction: "Stable",
  },
  {
    metric: "Deployment Frequency",
    trend: "+12%",
    direction: "Improving",
  },
  {
    metric: "Incident Volume",
    trend: "-9%",
    direction: "Decreasing",
  },
];

export default function RuntimeTrendAnalytics() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Trend Analytics
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Trend intelligence identifies operational patterns and changes
          occurring across enterprise runtime environments.
        </p>
      </div>

      <div className="space-y-4">
        {trends.map((trend) => (
          <div
            key={trend.metric}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div>
              <h4 className="font-medium text-cyan-300">
                {trend.metric}
              </h4>

              <p className="mt-1 text-sm text-slate-400">
                Direction: {trend.direction}
              </p>
            </div>

            <div className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300">
              {trend.trend}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}