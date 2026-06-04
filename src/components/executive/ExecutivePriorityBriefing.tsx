import {
  AlertTriangle,
  DollarSign,
  Users,
  Activity,
  ArrowRight,
} from "lucide-react";

const priorities = [
  {
    label: "Strategic Priority",
    value: "Consolidate executive intelligence layers",
    icon: AlertTriangle,
  },
  {
    label: "Revenue Priority",
    value: "Protect renewals and accelerate expansion",
    icon: DollarSign,
  },
  {
    label: "Customer Priority",
    value: "Intervene on elevated-risk enterprise accounts",
    icon: Users,
  },
  {
    label: "Operational Priority",
    value: "Maintain SaaS readiness and platform stability",
    icon: Activity,
  },
];

export default function ExecutivePriorityBriefing() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Executive Priority Briefing
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            What Leadership Should Focus On
          </h2>
        </div>

        <ArrowRight className="h-5 w-5 text-cyan-300" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {priorities.map((priority) => {
          const Icon = priority.icon;

          return (
            <div
              key={priority.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <Icon className="mb-3 h-5 w-5 text-cyan-300" />

              <div className="text-xs uppercase tracking-wide text-slate-500">
                {priority.label}
              </div>

              <div className="mt-2 text-sm font-medium leading-6 text-white">
                {priority.value}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}