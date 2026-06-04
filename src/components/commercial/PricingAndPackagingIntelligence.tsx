import {
  BadgeDollarSign,
  Building2,
  Layers3,
  Crown,
  ArrowRight,
} from "lucide-react";

const packages = [
  {
    title: "Starter",
    price: "$49/mo",
    description:
      "Core architecture intelligence for solo builders, consultants, and early-stage teams.",
    icon: Layers3,
  },
  {
    title: "Professional",
    price: "$149/mo",
    description:
      "Advanced workspace intelligence, AI recommendations, and operational dashboards.",
    icon: BadgeDollarSign,
  },
  {
    title: "Enterprise",
    price: "Custom",
    description:
      "Multi-tenant readiness, executive intelligence, customer success, revenue operations, and white-label capability.",
    icon: Building2,
  },
  {
    title: "Executive Edition",
    price: "Premium",
    description:
      "Strategic command centers, ROI intelligence, launch readiness, and executive decision support.",
    icon: Crown,
  },
];

export default function PricingAndPackagingIntelligence() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Pricing & Packaging Intelligence
        </p>

        <h2 className="text-2xl font-bold text-white">
          Monetization Package Strategy
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Defines commercial packaging, pricing posture, premium workspace
          tiers, and enterprise monetization opportunities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg) => {
          const Icon = pkg.icon;

          return (
            <div
              key={pkg.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <div className="text-lg font-semibold text-white">
                {pkg.title}
              </div>

              <div className="mt-2 text-2xl font-bold text-cyan-300">
                {pkg.price}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {pkg.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Packaging Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Position the platform around premium executive intelligence and
              enterprise SaaS readiness. Use lower tiers for adoption, while
              reserving customer intelligence, revenue operations, and
              white-label capabilities for higher-value plans.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}