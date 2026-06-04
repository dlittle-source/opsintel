import {
  BadgeCheck,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  DollarSign,
  Sparkles,
} from "lucide-react";

import {
  getCommercializationReadiness,
  getCommercializationScore,
  getPrimaryValueProposition,
} from "@/lib/commercializationEngine";

export default function SaaSCommercializationPanel() {
  const channels = getCommercializationReadiness();
  const score = getCommercializationScore();
  const valueProposition = getPrimaryValueProposition();

  const iconMap = {
    selfServeSaaS: Cloud,
    enterpriseSales: Building2,
    whiteLabel: BadgeCheck,
    consulting: Briefcase,
    apiLicensing: Code2,
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Commercialization Layer
          </div>

          <h2 className="text-2xl font-semibold text-white">
            SaaS Commercialization Readiness
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            {valueProposition}
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-cyan-300">
            <DollarSign className="h-4 w-4" />
            <span className="font-medium">
              {score}% Ready
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {channels.map((channel) => {
          const Icon =
            iconMap[channel.channel];

          return (
            <div
              key={channel.channel}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <h3 className="text-sm font-semibold text-white">
                {channel.label}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {channel.description}
              </p>

              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                <BadgeCheck className="h-3 w-3" />
                Ready
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}