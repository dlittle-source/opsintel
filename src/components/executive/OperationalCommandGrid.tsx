"use client";

const operationalWidgets = [
  {
    title: "Global Infrastructure Status",
    value: "98.2%",
    subtitle: "Enterprise operational availability",
    status: "STABLE",
  },
  {
    title: "Threat Monitoring Coverage",
    value: "91%",
    subtitle: "Active AI security visibility",
    status: "ACTIVE",
  },
  {
    title: "Deployment Reliability",
    value: "95%",
    subtitle: "Validated deployment confidence",
    status: "OPTIMIZED",
  },
  {
    title: "Cloud Cost Efficiency",
    value: "84%",
    subtitle: "Infrastructure optimization alignment",
    status: "SCALING",
  },
];

const activityFeed = [
  "AI telemetry engine detected stable infrastructure behavior.",
  "Rollback validation completed successfully for deployment cluster.",
  "Threat intelligence engine reported no critical vulnerabilities.",
  "Executive governance systems synchronized operational policies.",
  "Multi-cloud infrastructure analysis completed successfully.",
];

const infrastructureMatrix = [
  {
    system: "Telemetry Engine",
    health: "ONLINE",
  },
  {
    system: "Threat Intelligence",
    health: "SECURE",
  },
  {
    system: "Deployment Systems",
    health: "STABLE",
  },
  {
    system: "Executive Governance",
    health: "ACTIVE",
  },
  {
    system: "Resiliency Systems",
    health: "OPTIMIZED",
  },
];

export default function OperationalCommandGrid() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
            AI Operational Command Grid
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
            Enterprise Operational Matrix
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            The platform is evolving into a premium operational
            command environment with adaptive infrastructure
            visibility, executive AI monitoring, and centralized
            operational intelligence systems.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
          LIVE AI OPERATIONS
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            {operationalWidgets.map((widget) => (
              <div
                key={widget.title}
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-slate-800
                  bg-gradient-to-br
                  from-slate-950
                  via-slate-900
                  to-slate-950
                  p-6
                  shadow-2xl
                "
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Executive Metric
                      </p>

                      <h3 className="mt-3 text-lg font-semibold text-white">
                        {widget.title}
                      </h3>
                    </div>

                    <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold tracking-wider text-cyan-300">
                      {widget.status}
                    </div>
                  </div>

                  <div className="mt-8 text-5xl font-black tracking-tight text-white">
                    {widget.value}
                  </div>

                  <p className="mt-4 text-sm text-slate-400">
                    {widget.subtitle}
                  </p>

                  <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      style={{
                        width: widget.value,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="
              rounded-3xl
              border
              border-slate-800
              bg-slate-950/70
              p-6
              shadow-2xl
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Live Infrastructure Activity
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  Operational Event Stream
                </h3>
              </div>

              <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                STREAM ACTIVE
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {activityFeed.map((activity) => (
                <div
                  key={activity}
                  className="
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-slate-800
                    bg-black/20
                    p-4
                  "
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />

                  <p className="text-sm leading-6 text-slate-300">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-950/70
            p-6
            shadow-2xl
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                Infrastructure Matrix
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                System Health Grid
              </h3>
            </div>

            <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              LIVE
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {infrastructureMatrix.map((item) => (
              <div
                key={item.system}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-slate-800
                  bg-black/20
                  px-4
                  py-4
                "
              >
                <div>
                  <p className="text-sm font-medium text-white">
                    {item.system}
                  </p>

                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Executive Infrastructure Layer
                  </p>
                </div>

                <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {item.health}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Executive Operational Status
            </p>

            <div className="mt-4 text-4xl font-black text-white">
              STABLE
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              All critical enterprise operational systems are
              currently reporting stable infrastructure behavior
              with active intelligence monitoring enabled.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}