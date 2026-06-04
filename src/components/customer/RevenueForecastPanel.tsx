import { DollarSign, TrendingUp, ShieldAlert, Repeat } from "lucide-react";

import {
  getRevenueForecast,
  getRevenueInsights,
} from "@/lib/revenueIntelligenceEngine";

const riskStyles = {
  low: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  moderate: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  high: "border-red-500/30 bg-red-500/10 text-red-300",
};

export default function RevenueForecastPanel() {
  const forecast = getRevenueForecast();
  const insights = getRevenueInsights();

  const cards = [
    {
      label: "Projected Revenue",
      value: forecast.projectedRevenue,
      icon: DollarSign,
    },
    {
      label: "Renewal Revenue",
      value: forecast.renewalRevenue,
      icon: Repeat,
    },
    {
      label: "Expansion Revenue",
      value: forecast.expansionRevenue,
      icon: TrendingUp,
    },
    {
      label: "Revenue At Risk",
      value: forecast.atRiskRevenue,
      icon: ShieldAlert,
    },
  ];

  return (
    <section className="rounded-3xl border border-emerald-500/20 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-emerald-300">
            Revenue Intelligence
          </div>

          <h2 className="mt-2 text-xl font-semibold text-white">
            Customer Revenue Forecast
          </h2>

          <p className="mt-1 max-w-3xl text-sm text-slate-400">
            Executive view of projected renewal value, expansion upside,
            protected revenue, and account-level revenue risk.
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-300">
          Net Opportunity ${forecast.netRevenueOpportunity.toLocaleString()}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <Icon className="h-5 w-5 text-emerald-300" />
                <span className="text-xs text-slate-500">Forecast</span>
              </div>

              <div className="text-2xl font-bold text-white">
                ${card.value.toLocaleString()}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                {card.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
        <div className="grid grid-cols-5 border-b border-white/10 bg-slate-900/70 px-4 py-3 text-xs uppercase tracking-wide text-slate-500">
          <div>Customer</div>
          <div>Contract</div>
          <div>Renewal</div>
          <div>Expansion</div>
          <div>Risk</div>
        </div>

        {insights.map((customer) => (
          <div
            key={customer.customerId}
            className="grid grid-cols-5 items-center border-b border-white/5 px-4 py-3 text-sm last:border-b-0"
          >
            <div className="font-medium text-white">
              {customer.customerName}
            </div>

            <div className="text-slate-300">
              ${customer.contractValue.toLocaleString()}
            </div>

            <div className="text-cyan-300">
              {customer.renewalProbability}%
            </div>

            <div className="text-emerald-300">
              {customer.expansionProbability}%
            </div>

            <div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  riskStyles[customer.riskLevel]
                }`}
              >
                {customer.riskLevel.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}