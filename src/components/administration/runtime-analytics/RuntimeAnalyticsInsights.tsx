const analyticsInsights = [
  {
    title: "Trend Accuracy",
    value: "97.8%",
  },
  {
    title: "Forecast Confidence",
    value: "94.2%",
  },
  {
    title: "Anomalies Identified",
    value: "1,284",
  },
  {
    title: "Capacity Efficiency",
    value: "91.6%",
  },
];

export default function RuntimeAnalyticsInsights() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Analytics Insights
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Analytics intelligence delivers forecasting confidence, anomaly
          awareness, trend accuracy, and capacity efficiency across enterprise
          runtime environments.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {analyticsInsights.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5"
          >
            <p className="text-sm text-slate-400">
              {item.title}
            </p>

            <p className="mt-3 text-2xl font-semibold text-cyan-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}