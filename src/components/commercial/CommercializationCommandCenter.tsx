import {
  Rocket,
  DollarSign,
  Target,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function CommercializationCommandCenter() {
  const initiatives = [
    {
      title: "Product Positioning",
      description:
        "Position the platform as an Executive AI Operating System for architecture intelligence, operations, customer success, and revenue visibility.",
      icon: Target,
    },
    {
      title: "Monetization Strategy",
      description:
        "Package intelligence workspaces into tiered SaaS offerings with premium executive capabilities.",
      icon: DollarSign,
    },
    {
      title: "Go-To-Market",
      description:
        "Target engineering leaders, DevOps teams, platform teams, consultants, and SaaS operators.",
      icon: Briefcase,
    },
    {
      title: "Launch Readiness",
      description:
        "Finalize executive workflows, platform polish, onboarding experience, and commercialization assets.",
      icon: Rocket,
    },
  ];

  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Commercialization Command Center
          </p>

          <h2 className="text-3xl font-bold text-white">
            Product & Market Readiness
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Executive view of monetization readiness, product positioning,
            commercialization strategy, and launch execution priorities.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">
          <div className="text-xs text-slate-400">
            Launch Readiness
          </div>

          <div className="text-2xl font-bold text-emerald-300">
            88%
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {initiatives.map((initiative) => {
          const Icon = initiative.icon;

          return (
            <div
              key={initiative.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <h3 className="font-semibold text-white">
                {initiative.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {initiative.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Executive Commercialization Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Continue consolidating executive intelligence into a premium SaaS
              platform while preparing packaging, onboarding, and go-to-market
              assets for launch readiness.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}