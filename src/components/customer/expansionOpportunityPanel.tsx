import { ArrowUpRight, Rocket, TrendingUp } from "lucide-react";

import { getCustomerAccounts } from "@/lib/customerManagementEngine";
import { getRevenueInsights } from "@/lib/revenueIntelligenceEngine";

export default function ExpansionOpportunityPanel() {
  const customers = getCustomerAccounts();
  const revenueInsights = getRevenueInsights();

  const opportunities = customers
    .map((customer) => {
      const revenue = revenueInsights.find(
        (item) => item.customerId === customer.id,
      );

      return {
        ...customer,
        expansionProbability: revenue?.expansionProbability ?? 0,
        estimatedExpansionValue: Math.round(
          customer.contractValue *
            0.2 *
            ((revenue?.expansionProbability ?? 0) / 100),
        ),
      };
    })
    .filter((customer) => customer.expansionPotential >= 70)
    .sort((a, b) => b.expansionPotential - a.expansionPotential);

  return (
    <section className="rounded-3xl border border-violet-500/20 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-violet-300">
            Expansion Intelligence
          </div>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Growth Opportunity Pipeline
          </h2>

          <p className="mt-1 max-w-3xl text-sm text-slate-400">
            Prioritized accounts with high expansion readiness, upsell
            potential, and executive-level growth motions.
          </p>
        </div>

        <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
          {opportunities.length} Active Opportunities
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {opportunities.map((customer) => (
          <div
            key={customer.id}
            className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
          >
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-white">
                  {customer.name}
                </div>

                <div className="mt-1 text-sm text-slate-400">
                  {customer.industry} · {customer.tier}
                </div>
              </div>

              <Rocket className="h-5 w-5 text-violet-300" />
            </div>

            <div className="grid gap-3">
              <Metric
                label="Expansion Potential"
                value={`${customer.expansionPotential}%`}
              />

              <Metric
                label="Expansion Probability"
                value={`${customer.expansionProbability}%`}
              />

              <Metric
                label="Estimated Expansion"
                value={`$${customer.estimatedExpansionValue.toLocaleString()}`}
              />
            </div>

            <div className="mt-4 rounded-xl border border-violet-500/20 bg-violet-500/10 p-3 text-sm text-violet-100">
              {customer.recommendedAction}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs font-medium text-violet-300">
              <TrendingUp className="h-4 w-4" />
              Executive growth motion recommended
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-1 text-lg font-semibold text-white">
        {value}
      </div>
    </div>
  );
}