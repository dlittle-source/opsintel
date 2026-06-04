import {
  BadgeCheck,
  Building2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { getOrganization, getOrganizationHealthScore } from "@/lib/organizationEngine";
import { getPermissions } from "@/lib/roleBasedAccessEngine";
import { getTeam, getTeamHealthScore } from "@/lib/teamManagementEngine";
import { getTenant, getTenantHealthScore } from "@/lib/tenantEngine";

export default function MultiTenantReadinessPanel() {
  const tenant = getTenant();
  const organization = getOrganization();
  const team = getTeam();

  const tenantScore = getTenantHealthScore(tenant);
  const organizationScore = getOrganizationHealthScore(organization);
  const teamScore = getTeamHealthScore(team);

  const adminPermissions = getPermissions("admin");

  const roleCoverage = Object.values(adminPermissions).filter(Boolean).length;
  const totalPermissions = Object.values(adminPermissions).length;

  const enterpriseReadiness = Math.round(
    (tenantScore + organizationScore + teamScore) / 3,
  );

  const readinessItems = [
    {
      icon: Building2,
      title: "Tenant Layer",
      value: tenant.name,
      score: tenantScore,
    },
    {
      icon: Building2,
      title: "Organization Layer",
      value: organization.name,
      score: organizationScore,
    },
    {
      icon: Users,
      title: "Team Layer",
      value: team.name,
      score: teamScore,
    },
    {
      icon: ShieldCheck,
      title: "RBAC Coverage",
      value: `${roleCoverage}/${totalPermissions} Admin Permissions`,
      score: 100,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            <Sparkles className="h-4 w-4" />
            Multi-Tenant SaaS Layer
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Multi-Tenant Enterprise Readiness
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Tenant structure, organization hierarchy, team management, and
            role-based access controls are now modeled for enterprise SaaS
            adoption.
          </p>
        </div>

        <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-violet-300">
            <BadgeCheck className="h-4 w-4" />
            <span className="font-medium">
              {enterpriseReadiness}% Ready
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {readinessItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Icon className="h-5 w-5 text-violet-300" />
              </div>

              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-slate-400">
                {item.value}
              </p>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Health</span>
                  <span className="text-xs text-violet-300">
                    {item.score}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-violet-400"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}