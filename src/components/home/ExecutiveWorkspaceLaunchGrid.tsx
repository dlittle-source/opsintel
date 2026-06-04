import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  Cloud,
  Cpu,
  Gauge,
  GitBranch,
  Layers3,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const workspaces = [
  {
    title: "Executive",
    description:
      "Strategic readiness, modernization intelligence, and executive platform oversight.",
    href: "/dashboard/executive",
    icon: Cpu,
    accent: "text-orange-300",
  },
  {
    title: "Command Center",
    description:
      "Autonomous operations, orchestration, and executive command workflows.",
    href: "/dashboard/command-center",
    icon: Layers3,
    accent: "text-cyan-300",
  },
  {
    title: "AI Copilot",
    description:
      "Infrastructure questions, executive guidance, and AI-powered advisory intelligence.",
    href: "/dashboard/copilot",
    icon: BrainCircuit,
    accent: "text-violet-300",
  },
  {
    title: "Commercialization",
    description:
      "Launch readiness, pricing strategy, go-to-market intelligence, and commercialization planning.",
    href: "/dashboard/commercialization",
    icon: TrendingUp,
    accent: "text-emerald-300",
  },
  {
    title: "Compliance",
    description:
      "Governance, controls, risk management, and policy posture visibility.",
    href: "/dashboard/compliance",
    icon: ShieldCheck,
    accent: "text-emerald-300",
  },
  {
    title: "Deployments",
    description:
      "Release readiness, deployment forecasting, and delivery risk intelligence.",
    href: "/dashboard/deployments",
    icon: GitBranch,
    accent: "text-pink-300",
  },
  {
    title: "Optimization",
    description:
      "Cost efficiency, performance analysis, and infrastructure optimization signals.",
    href: "/dashboard/optimization",
    icon: Gauge,
    accent: "text-amber-300",
  },
  {
    title: "Multi-Cloud",
    description:
      "AWS, Azure, GCP, and hybrid infrastructure governance and visibility.",
    href: "/dashboard/multicloud",
    icon: Cloud,
    accent: "text-sky-300",
  },
  {
    title: "Intelligence",
    description:
      "AI insights, incident correlation, platform health, and operational awareness.",
    href: "/dashboard/intelligence",
    icon: Activity,
    accent: "text-lime-300",
  },
];

export default function ExecutiveWorkspaceLaunchGrid() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-5 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
      <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Executive Workspaces
          </p>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Launch operational workspaces
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            Direct access to executive intelligence, command operations,
            commercialization strategy, deployment governance, optimization,
            compliance, multi-cloud management, and AI-powered operational
            insights.
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {workspaces.map((workspace) => {
          const Icon = workspace.icon;

          return (
            <Link
              key={workspace.title}
              href={workspace.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-white/[0.06] hover:shadow-[0_0_35px_rgba(56,189,248,0.08)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div
                  className={`rounded-xl border border-white/10 bg-black/20 p-2.5 ${workspace.accent}`}
                >
                  <Icon className="h-4 w-4" />
                </div>

                <ArrowRight className="h-4 w-4 text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-white">
                {workspace.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-400">
                {workspace.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}