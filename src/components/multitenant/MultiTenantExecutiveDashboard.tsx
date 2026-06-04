import {
  BadgeCheck,
  Building2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { getOrganization, getOrganizationHealthScore } from "@/lib/organizationEngine";
import { getPermissions } from "@/lib/roleBasedAccessEngine";
import { getTeam, getTeamHealthScore } from "@/lib/teamManagementEngine";
import {
  getTenantUsageIntelligence,
  getTenantUsageScore,
  shouldRecommendExpansion,
} from "@/lib/tenantUsageIntelligenceEngine";
import { getTenant, getTenantHealthScore } from "@/lib/tenantEngine";

export default function MultiTenantExecutiveDashboard() {
  const tenant = getTenant();
  const organization = getOrganization();
  const team = getTeam();
  const usage = getTenantUsageIntelligence();

  const tenantScore = getTenantHealthScore(tenant);
  const organizationScore = getOrganizationHealthScore(organization);
  const teamScore = getTeamHealthScore(team);
  const usageScore = getTenantUsageScore(usage);

  const adminPermissions = getPermissions("admin");
  const rbacScore = Math.round(
    (Object.values(adminPermissions).filter(Boolean).length /
      Object.values(adminPermissions).length) *
      100,
  );

  const expansionRecommended = shouldRecommendExpansion(usage);

  const executiveScore = Math.round(
    (tenantScore + organizationScore + teamScore + usageScore + rbacScore) / 5,
  );

  const metrics = [
    {
      label: "Tenant Health",
      value: `${tenantScore}%`,
      icon: Building2,
    },
    {
      label: "Organization Health",
      value: `${organizationScore}%`,
      icon: Building2,
    },
    {
      label: "Team Health",
      value: `${teamScore}%`,
      icon: Users,
    },
    {
      label: "RBAC Coverage",
      value: `${rbacScore}%`,
      icon: ShieldCheck,
    },
    {
      label: "Usage Score",
      value: `${usageScore}%`,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_70px_rgba(0,0,0,0.45)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Multi-Tenant Executive Dashboard
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Enterprise Account Intelligence
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Consolidated tenant health, organization readiness, team maturity,
            role-based access coverage, usage intelligence, and expansion
            signals for enterprise SaaS adoption.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-emerald-300">
            <BadgeCheck className="h-4 w-4" />
            <span className="font-medium">
              {executiveScore}% Enterprise Ready
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-300" />
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
            Expansion Signal
          </span>

          <span
            className={
              expansionRecommended
                ? "text-sm font-medium text-emerald-300"
                : "text-sm font-medium text-slate-500"
            }
          >
            {expansionRecommended ? "Recommended" : "Not Required"}
          </span>
        </div>

        <p className="mt-2 text-sm text-slate-400">
          This tenant demonstrates strong adoption across users, workspaces,
          usage activity, and enterprise readiness indicators.
        </p>
      </div>
    </section>
  );
}