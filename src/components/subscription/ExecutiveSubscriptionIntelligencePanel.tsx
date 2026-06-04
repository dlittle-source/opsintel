import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  CheckCircle2,
  Crown,
  Lock,
  Sparkles,
} from "lucide-react";

import { getBillingSummary, getRecommendedUpgrade } from "@/lib/billingEngine";
import { getEnabledFeatures, getLockedFeatures } from "@/lib/featureEntitlementEngine";
import { getSubscriptionPlan, SubscriptionTier } from "@/lib/subscriptionEngine";
import {
  getRemainingUsage,
  getUsagePercentage,
  UsageSnapshot,
} from "@/lib/usageMeteringEngine";
import {
  getAccessibleWorkspaces,
  getRestrictedWorkspaces,
} from "@/lib/workspaceAccessEngine";

const currentTier: SubscriptionTier = "professional";

const mockUsage: UsageSnapshot = {
  architectureGenerations: 184,
  aiCopilotRequests: 742,
  deploymentAnalyses: 91,
  complianceAnalyses: 64,
};

const labelMap: Record<string, string> = {
  executiveWorkspace: "Executive",
  commandCenter: "Command Center",
  intelligenceWorkspace: "Intelligence",
  deploymentWorkspace: "Deployments",
  complianceWorkspace: "Compliance",

  architectureGenerator: "Architecture Generator",
  executiveIntelligence: "Executive Intelligence",
  trendAnalysis: "Trend Analysis",
  deploymentStrategyEngine: "Deployment Strategy",
  complianceEngine: "Compliance Engine",
  aiCopilot: "AI Copilot",
  whiteLabel: "White Label",
  apiAccess: "API Access",
  customBranding: "Custom Branding",
};

export default function ExecutiveSubscriptionIntelligencePanel() {
  const plan = getSubscriptionPlan(currentTier);
  const billing = getBillingSummary(currentTier, "monthly");
  const recommendedUpgrade = getRecommendedUpgrade(currentTier);

  const enabledFeatures = getEnabledFeatures(currentTier);
  const lockedFeatures = getLockedFeatures(currentTier);

  const accessibleWorkspaces = getAccessibleWorkspaces(currentTier);
  const restrictedWorkspaces = getRestrictedWorkspaces(currentTier);

  const remaining = getRemainingUsage(currentTier, mockUsage);

  const architectureUsage = getUsagePercentage(
    currentTier,
    "architectureGenerations",
    mockUsage,
  );

  const copilotUsage = getUsagePercentage(
    currentTier,
    "aiCopilotRequests",
    mockUsage,
  );

  const deploymentUsage = getUsagePercentage(
    currentTier,
    "deploymentAnalyses",
    mockUsage,
  );

  const complianceUsage = getUsagePercentage(
    currentTier,
    "complianceAnalyses",
    mockUsage,
  );

  const usageItems = [
    {
      label: "Architecture",
      used: mockUsage.architectureGenerations,
      remaining: remaining.architectureGenerations,
      percent: architectureUsage,
    },
    {
      label: "AI Copilot",
      used: mockUsage.aiCopilotRequests,
      remaining: remaining.aiCopilotRequests,
      percent: copilotUsage,
    },
    {
      label: "Deployments",
      used: mockUsage.deploymentAnalyses,
      remaining: remaining.deploymentAnalyses,
      percent: deploymentUsage,
    },
    {
      label: "Compliance",
      used: mockUsage.complianceAnalyses,
      remaining: remaining.complianceAnalyses,
      percent: complianceUsage,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles className="h-4 w-4" />
            SaaS Monetization Layer
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Executive Subscription Intelligence
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            Subscription tier, workspace access, feature entitlements, usage
            limits, and upgrade intelligence are now being evaluated through the
            SaaS control layer.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">
            Current Plan
          </p>
          <p className="text-xl font-semibold text-white">{plan.name}</p>
          <p className="text-sm text-slate-400">${billing.activePrice}/month</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-emerald-300">
            <Crown className="h-4 w-4" />
            Workspace Access
          </div>

          <div className="space-y-2">
            {accessibleWorkspaces.map((workspace) => (
              <div
                key={workspace}
                className="flex items-center justify-between rounded-xl bg-emerald-400/10 px-3 py-2 text-sm"
              >
                <span className="text-slate-300">{labelMap[workspace]}</span>
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              </div>
            ))}

            {restrictedWorkspaces.map((workspace) => (
              <div
                key={workspace}
                className="flex items-center justify-between rounded-xl bg-white/[0.03] px-3 py-2 text-sm"
              >
                <span className="text-slate-500">{labelMap[workspace]}</span>
                <Lock className="h-4 w-4 text-slate-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-cyan-300">
            <CheckCircle2 className="h-4 w-4" />
            Enabled Features
          </div>

          <div className="space-y-2">
            {enabledFeatures.slice(0, 6).map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-cyan-400/10 px-3 py-2 text-sm text-slate-300"
              >
                {labelMap[feature]}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-amber-300">
            <Lock className="h-4 w-4" />
            Locked Growth Features
          </div>

          <div className="space-y-2">
            {lockedFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-xl bg-amber-400/10 px-3 py-2 text-sm text-slate-300"
              >
                {labelMap[feature]}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-violet-300">
            <BadgeDollarSign className="h-4 w-4" />
            Upgrade Intelligence
          </div>

          <p className="text-sm text-slate-400">Recommended next plan</p>

          <p className="mt-2 text-2xl font-semibold capitalize text-white">
            {recommendedUpgrade ?? "Fully Optimized"}
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Unlock API access, custom branding, higher usage limits, and
            enterprise commercialization features.
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-cyan-300">
            View upgrade path
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <div className="mb-4 flex items-center gap-2 text-sm font-medium text-cyan-300">
          <BarChart3 className="h-4 w-4" />
          Monthly Usage Metering
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {usageItems.map((item) => (
            <div key={item.label} className="rounded-2xl bg-black/20 p-4">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-medium text-white">{item.label}</p>
                <p className="text-sm text-slate-400">{item.percent}%</p>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-300"
                  style={{ width: `${Math.min(item.percent, 100)}%` }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500">
                {item.used} used · {item.remaining} remaining
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}