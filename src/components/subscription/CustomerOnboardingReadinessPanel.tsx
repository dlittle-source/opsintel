import {
  BadgeCheck,
  Building,
  CheckCircle2,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

import {
  defaultOnboardingSteps,
  getOnboardingProgress,
} from "@/lib/customerOnboardingEngine";

export default function CustomerOnboardingReadinessPanel() {
  const progress =
    getOnboardingProgress(
      defaultOnboardingSteps,
    );

  const capabilities = [
    {
      icon: Building,
      title: "Tenant Creation",
      description:
        "Enterprise account provisioning foundation established.",
    },
    {
      icon: Users,
      title: "Workspace Provisioning",
      description:
        "Customer workspaces can be initialized and configured.",
    },
    {
      icon: Rocket,
      title: "Activation Tracking",
      description:
        "Onboarding milestones and activation progress supported.",
    },
    {
      icon: CheckCircle2,
      title: "Customer Journey",
      description:
        "Structured onboarding workflow available for SaaS growth.",
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Customer Acquisition Layer
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Customer Onboarding Readiness
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            The platform now includes onboarding workflows, activation tracking,
            customer provisioning foundations, and SaaS adoption readiness.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-emerald-300">
            <BadgeCheck className="h-4 w-4" />
            <span className="font-medium">
              Customer Ready
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-sm font-medium text-white">
            Activation Progress Model
          </span>

          <span className="text-sm text-emerald-300">
            {progress.percentage}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-400"
            style={{
              width: `${progress.percentage}%`,
            }}
          />
        </div>

        <p className="mt-3 text-xs text-slate-500">
          {progress.completedSteps} of {progress.totalSteps} onboarding
          milestones complete.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((capability) => {
          const Icon = capability.icon;

          return (
            <div
              key={capability.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <Icon className="h-5 w-5 text-emerald-300" />
              </div>

              <h3 className="text-sm font-semibold text-white">
                {capability.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {capability.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}