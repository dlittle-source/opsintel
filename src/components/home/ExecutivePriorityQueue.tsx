import {
  AlertTriangle,
  ArrowRight,
  Clock3,
  Flag,
  ShieldCheck,
} from "lucide-react";

const priorities = [
  {
    title: "Validate production deployment path",
    owner: "Deployment Workspace",
    priority: "High",
    status: "Ready for review",
    icon: Flag,
    accent: "text-cyan-300",
  },
  {
    title: "Confirm governance posture",
    owner: "Compliance Workspace",
    priority: "Medium",
    status: "Controls aligned",
    icon: ShieldCheck,
    accent: "text-emerald-300",
  },
  {
    title: "Review optimization opportunities",
    owner: "Optimization Workspace",
    priority: "Medium",
    status: "Cost signals available",
    icon: Clock3,
    accent: "text-amber-300",
  },
];

export default function ExecutivePriorityQueue() {
  return (
    <section className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.55)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_35%)]" />

      <div className="relative z-10">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
          <AlertTriangle className="h-3.5 w-3.5" />
          Executive Priority Queue
        </div>

        <h2 className="text-xl font-semibold tracking-tight text-white">
          Highest-value decisions requiring attention.
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Prioritized executive actions based on operational readiness,
          governance alignment, deployment confidence, and optimization impact.
        </p>

        <div className="mt-6 space-y-3">
          {priorities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-sky-400/30 hover:bg-white/[0.06]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.04]">
                    <Icon className={`h-5 w-5 ${item.accent}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-white">
                        {item.title}
                      </h3>

                      <span className={`text-xs font-medium ${item.accent}`}>
                        {item.priority}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.owner}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {item.status}
                    </p>
                  </div>

                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-sky-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}