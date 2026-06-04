import {
  Activity,
  BadgeCheck,
  BarChart3,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import {
  getTenantUsageIntelligence,
  getTenantUsageScore,
  shouldRecommendExpansion,
} from "@/lib/tenantUsageIntelligenceEngine";

export default function TenantUsageIntelligencePanel() {
  const usage = getTenantUsageIntelligence();

  const score =
    getTenantUsageScore(usage);

  const expansion =
    shouldRecommendExpansion(
      usage,
    );

  const metrics = [
    {
      label: "Active Users",
      value: usage.activeUsers,
      icon: Users,
    },
    {
      label: "Workspaces",
      value: usage.totalWorkspaces,
      icon: Activity,
    },
    {
      label: "Expansion Signal",
      value: usage.expansionSignal,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Tenant Intelligence Layer
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Tenant Usage Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Usage growth, tenant health, adoption signals, and expansion
            opportunities across enterprise accounts.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-cyan-300">
            <BarChart3 className="h-4 w-4" />
            <span className="font-medium">
              Score {score}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <p className="text-xs uppercase tracking-wide text-slate-500">
                {metric.label}
              </p>

              <p className="mt-2 text-2xl font-semibold text-white">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-white">
            Expansion Recommendation
          </span>

          {expansion ? (
            <div className="flex items-center gap-1 text-emerald-300">
              <BadgeCheck className="h-4 w-4" />
              Recommended
            </div>
          ) : (
            <span className="text-slate-500">
              Not Required
            </span>
          )}
        </div>

        <p className="mt-2 text-sm text-slate-400">
          High adoption signals indicate this tenant may benefit from
          additional workspaces, upgraded plans, or expanded platform access.
        </p>
      </div>
    </section>
  );
}