"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BrainCircuit,
  Command,
  Gauge,
  GitBranch,
  LayoutDashboard,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const workspaces = [
  {
    label: "Executive",
    href: "/dashboard/executive",
    icon: LayoutDashboard,
    description: "Command overview",
  },
  {
    label: "Intelligence",
    href: "/dashboard/intelligence",
    icon: BrainCircuit,
    description: "AI operational signals",
  },
  {
    label: "Deployments",
    href: "/dashboard/deployments",
    icon: Activity,
    description: "Release readiness",
  },
  {
    label: "Optimization",
    href: "/dashboard/optimization",
    icon: TrendingUp,
    description: "Cost and performance",
  },
  {
    label: "Compliance",
    href: "/dashboard/compliance",
    icon: ShieldCheck,
    description: "Governance posture",
  },
  {
    label: "Multi-Cloud",
    href: "/dashboard/multicloud",
    icon: GitBranch,
    description: "Cloud strategy",
  },
  {
    label: "Command Center",
    href: "/dashboard/command-center",
    icon: Command,
    description: "Live operations",
  },
  {
    label: "Copilot",
    href: "/dashboard/copilot",
    icon: Sparkles,
    description: "Executive AI assistant",
  },
];

export default function EnterpriseCommandNavigation() {
  const pathname = usePathname();

  return (
    <aside className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 shadow-[0_0_50px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="mb-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-2">
            <Target className="h-5 w-5 text-cyan-300" />
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Executive Operations
            </p>
            <p className="text-xs text-slate-400">
              Unified command navigation
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2">
          <Gauge className="h-3.5 w-3.5 text-emerald-300" />
          <span className="text-xs font-medium text-emerald-200">
            All workspaces synchronized
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {workspaces.map((workspace) => {
          const Icon = workspace.icon;
          const isActive =
            pathname === workspace.href ||
            pathname.startsWith(`${workspace.href}/`);

          return (
            <Link
              key={workspace.href}
              href={workspace.href}
              className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 transition-all duration-300 ${
                isActive
                  ? "border-cyan-300/40 bg-cyan-300/15 shadow-[0_0_24px_rgba(34,211,238,0.12)]"
                  : "border-white/5 bg-white/[0.03] hover:border-cyan-300/25 hover:bg-cyan-300/10"
              }`}
            >
              <div
                className={`rounded-xl border p-2 transition-all duration-300 ${
                  isActive
                    ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200"
                    : "border-white/10 bg-white/[0.04] text-slate-400 group-hover:border-cyan-300/30 group-hover:text-cyan-200"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-sm font-semibold ${
                    isActive ? "text-white" : "text-slate-300"
                  }`}
                >
                  {workspace.label}
                </p>
                <p className="truncate text-xs text-slate-500">
                  {workspace.description}
                </p>
              </div>

              {isActive && <Gauge className="h-4 w-4 text-cyan-300" />}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}