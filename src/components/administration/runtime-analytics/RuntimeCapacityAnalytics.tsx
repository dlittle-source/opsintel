const capacities = [
  {
    resource: "Compute Capacity",
    utilization: "72%",
    status: "Healthy",
  },
  {
    resource: "Memory Capacity",
    utilization: "64%",
    status: "Healthy",
  },
  {
    resource: "Storage Capacity",
    utilization: "81%",
    status: "Monitor",
  },
  {
    resource: "Network Throughput",
    utilization: "58%",
    status: "Healthy",
  },
];

export default function RuntimeCapacityAnalytics() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Capacity Analytics
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Capacity intelligence provides visibility into resource utilization,
          scalability, and growth requirements across runtime environments.
        </p>
      </div>

      <div className="space-y-4">
        {capacities.map((capacity) => (
          <div
            key={capacity.resource}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {capacity.resource}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Utilization: {capacity.utilization}
                </p>
              </div>

              <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                {capacity.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}