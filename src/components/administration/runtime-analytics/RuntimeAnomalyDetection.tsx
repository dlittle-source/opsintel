const anomalies = [
  {
    event: "Memory Spike",
    severity: "Medium",
    source: "Runtime Engine",
  },
  {
    event: "Latency Deviation",
    severity: "High",
    source: "API Gateway",
  },
  {
    event: "Deployment Frequency Change",
    severity: "Low",
    source: "CI/CD Pipeline",
  },
  {
    event: "Storage Consumption Increase",
    severity: "Medium",
    source: "Storage Layer",
  },
];

export default function RuntimeAnomalyDetection() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Anomaly Detection
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Behavioral analytics identify unusual patterns and provide early
          warning visibility across runtime systems.
        </p>
      </div>

      <div className="space-y-4">
        {anomalies.map((anomaly) => (
          <div
            key={anomaly.event}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {anomaly.event}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Source: {anomaly.source}
                </p>
              </div>

              <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-sm text-amber-300">
                {anomaly.severity}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}