"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  BrainCircuit,
  Cloud,
  Command,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Radar,
  Settings,
} from "lucide-react";

import TenantLogo from "@/components/branding/TenantLogo";
import { getTenantBranding } from "@/lib/tenantBrandingEngine";
import { getTenantLogoConfig } from "@/lib/logoManagementEngine";
import {
  getBorderRadiusClass,
  getSidebarThemeClasses,
} from "@/lib/themeConfigurationEngine";

const workspaces = [
  {
    label: "Executive",
    href: "/dashboard/executive",
    icon: LayoutDashboard,
  },
  {
    label: "Intelligence",
    href: "/dashboard/intelligence",
    icon: BrainCircuit,
  },
  {
    label: "Deployments",
    href: "/dashboard/deployments",
    icon: Radar,
  },
  {
    label: "Optimization",
    href: "/dashboard/optimization",
    icon: TrendingUp,
  },
  {
    label: "Compliance",
    href: "/dashboard/compliance",
    icon: ShieldCheck,
  },
  {
    label: "Multi-Cloud",
    href: "/dashboard/multicloud",
    icon: Cloud,
  },
  {
    label: "Command Center",
    href: "/dashboard/command-center",
    icon: Command,
  },
  {
    label: "AI Copilot",
    href: "/dashboard/copilot",
    icon: Sparkles,
  },
  {
    label: "Commercialization",
    href: "/dashboard/commercialization",
    icon: TrendingUp,
  },
  {
    label: "Administration",
    href: "/dashboard/administration",
    icon: Settings,
  },
];

export default function ExecutiveWorkspaceSidebar() {
  const pathname = usePathname();
  const branding = getTenantBranding();
  const logoConfig = getTenantLogoConfig();
  const sidebarThemeClasses = getSidebarThemeClasses();
  const radiusClass = getBorderRadiusClass();

  return (
    <aside
      className={`hidden xl:flex xl:w-[290px] xl:flex-col xl:border-r xl:backdrop-blur-xl ${sidebarThemeClasses}`}
    >
      <div className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center overflow-hidden border border-cyan-400/20 bg-cyan-400/10 p-2 ${radiusClass}`}
          >
            <TenantLogo
              src={logoConfig.sidebarLogo}
              alt={`${branding.companyName} Logo`}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div>
            <div className="text-sm font-medium text-white">
              {branding.companyName}
            </div>

            <div className="text-xs uppercase tracking-[0.18em] text-cyan-300">
              Executive Intelligence Platform
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mb-4 px-3 text-xs uppercase tracking-[0.22em] text-slate-500">
          Executive Workspaces
        </div>

        <nav className="space-y-2">
          {workspaces.map((workspace) => {
            const isActive =
              pathname === workspace.href ||
              pathname.startsWith(`${workspace.href}/`);

            return (
              <Link
                key={workspace.href}
                href={workspace.href}
                className={`group flex items-center justify-between border px-4 py-3 transition-all duration-300 ${radiusClass} ${
                  isActive
                    ? "border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(56,189,248,0.10)]"
                    : "border-transparent bg-transparent hover:border-white/10 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <workspace.icon
                    className={`h-5 w-5 transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  />

                  <span
                    className={`text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 group-hover:text-slate-200"
                    }`}
                  >
                    {workspace.label}
                  </span>
                </div>

                {isActive && (
                  <div className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/10 p-4">
        <div
          className={`border border-emerald-400/20 bg-emerald-400/10 p-4 ${radiusClass}`}
        >
          <div className="text-xs uppercase tracking-[0.18em] text-emerald-300">
            {branding.companyName} Status
          </div>

          <div className="mt-2 text-sm font-medium text-white">
            Executive intelligence platform operating normally
          </div>
        </div>
      </div>
    </aside>
  );
}