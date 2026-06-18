const schedules = [
  {
    name: "Nightly Health Validation",
    cadence: "Daily",
    nextRun: "01:00 UTC",
    status: "Scheduled",
  },
  {
    name: "Infrastructure Optimization",
    cadence: "Weekly",
    nextRun: "Saturday 03:00 UTC",
    status: "Scheduled",
  },
  {
    name: "Compliance Audit Refresh",
    cadence: "Monthly",
    nextRun: "1st Day 02:00 UTC",
    status: "Pending",
  },
  {
    name: "Tenant Synchronization",
    cadence: "Hourly",
    nextRun: "Top of Hour",
    status: "Active",
  },
];

export default function RuntimeSchedulingCenter() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Scheduling Center
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Scheduling services coordinate recurring operations, maintenance
          windows, synchronization jobs, and automated runtime activities.
        </p>
      </div>

      <div className="space-y-4">
        {schedules.map((schedule) => (
          <div
            key={schedule.name}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {schedule.name}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Frequency: {schedule.cadence}
                </p>

                <p className="text-sm text-slate-500">
                  Next Run: {schedule.nextRun}
                </p>
              </div>

              <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-sm text-indigo-300">
                {schedule.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}