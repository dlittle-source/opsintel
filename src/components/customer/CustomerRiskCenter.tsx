import {
  AlertTriangle,
  ShieldAlert,
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const risks = [
  {
    title: "Renewal Exposure",
    level: "Elevated",
    detail: "2 strategic accounts show renewal pressure within the next 90 days.",
  },
  {
    title: "Adoption Decline",
    level: "Moderate",
    detail: "Usage has dropped across high-value workspaces over the last cycle.",
  },
  {
    title: "Executive Sponsor Risk",
    level: "Watch",
    detail: "One enterprise account has reduced leadership engagement.",
  },
];

export default function CustomerRiskCenter() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-2xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-2 text-sm font-medium text-rose-300">
            <ShieldAlert className="h-4 w-4" />
            Customer Risk Center
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Enterprise Retention Risk Intelligence
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Monitors customer health, renewal exposure, adoption patterns, and
            executive engagement signals to identify accounts requiring action.
          </p>
        </div>

        <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-right">
          <p className="text-xs text-slate-400">Risk Posture</p>
          <p className="text-lg font-semibold text-rose-300">Elevated</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {risks.map((risk) => (
          <div
            key={risk.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <AlertTriangle className="h-5 w-5 text-amber-300" />
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                {risk.level}
              </span>
            </div>

            <h3 className="text-base font-semibold text-white">
              {risk.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              {risk.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
        <div className="flex items-start gap-3">
          <Activity className="mt-1 h-5 w-5 text-cyan-300" />

          <div className="flex-1">
            <h3 className="font-semibold text-white">
              Recommended Executive Action
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              Prioritize executive outreach for accounts with declining usage,
              renewal pressure, or reduced stakeholder engagement. Assign
              customer success intervention plans before renewal windows narrow.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Intervention Required
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                Open Risk Review
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}