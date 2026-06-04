import { GeneratedArchitecture } from "@/types/architecture";

type Props = {
  architecture: GeneratedArchitecture;
};

export default function OperationalStatusPanel({
  architecture,
}: Props) {
  const statuses = architecture.nodes.map((node) => ({
    id: node.id,
    label: node.label,
    provider: node.provider,
    status: "Operational",
    uptime: "99.98%",
  }));

  return (
    <section className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Operational Status
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Simulated infrastructure health and deployment monitoring.
          </p>
        </div>

        <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
          All Systems Operational
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {statuses.map((service) => (
          <div
            key={service.id}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {service.label}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {service.provider}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(74,222,128,0.9)]" />

                <span className="text-xs text-emerald-300">
                  {service.status}
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900 px-3 py-2">
              <span className="text-xs text-slate-400">
                Uptime
              </span>

              <span className="text-xs font-semibold text-cyan-300">
                {service.uptime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}