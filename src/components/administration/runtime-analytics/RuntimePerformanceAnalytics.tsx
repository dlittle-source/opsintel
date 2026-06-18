const performanceMetrics = [
  {
    service: "API Gateway",
    latency: "42 ms",
    availability: "99.99%",
  },
  {
    service: "Runtime Engine",
    latency: "58 ms",
    availability: "99.97%",
  },
  {
    service: "Telemetry Pipeline",
    latency: "71 ms",
    availability: "99.95%",
  },
  {
    service: "Policy Engine",
    latency: "36 ms",
    availability: "99.98%",
  },
];

export default function RuntimePerformanceAnalytics() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Performance Analytics
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Performance analytics provide visibility into service responsiveness,
          latency, and availability throughout enterprise runtime systems.
        </p>
      </div>

      <div className="space-y-4">
        {performanceMetrics.map((metric) => (
          <div
            key={metric.service}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {metric.service}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Latency: {metric.latency}
                </p>
              </div>

              <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300">
                {metric.availability}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}