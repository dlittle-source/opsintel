import {
  DollarSign,
  TrendingUp,
  Activity,
  BarChart3,
} from "lucide-react";

import {
  getRevenueOperationsSummary,
} from "@/lib/revenueOperationsEngine";

export default function RevenueOperationsDashboard() {
  const revenue = getRevenueOperationsSummary();

  const metrics = [
    {
      label: "ARR",
      value: `$${revenue.annualRecurringRevenue.toLocaleString()}`,
      icon: DollarSign,
    },
    {
      label: "MRR",
      value: `$${revenue.monthlyRecurringRevenue.toLocaleString()}`,
      icon: Activity,
    },
    {
      label: "NRR",
      value: `${revenue.netRevenueRetention}%`,
      icon: TrendingUp,
    },
    {
      label: "GRR",
      value: `${revenue.grossRevenueRetention}%`,
      icon: BarChart3,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Revenue Operations Intelligence
          </p>

          <h2 className="text-2xl font-bold text-white">
            Executive Revenue Dashboard
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Annual recurring revenue, monthly recurring revenue,
            retention performance, pipeline coverage, and revenue
            health monitoring.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">
            Revenue Health Score
          </div>

          <div className="text-lg font-semibold text-emerald-300">
            {revenue.revenueHealthScore}
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-3 h-5 w-5 text-cyan-300" />

              <div className="text-2xl font-bold text-white">
                {metric.value}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                {metric.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Expansion Revenue"
          value={`$${revenue.expansionRevenue.toLocaleString()}`}
        />

        <StatCard
          label="Contraction Revenue"
          value={`$${revenue.contractionRevenue.toLocaleString()}`}
        />

        <StatCard
          label="Churned Revenue"
          value={`$${revenue.churnedRevenue.toLocaleString()}`}
        />

        <StatCard
          label="Pipeline Coverage"
          value={`${revenue.pipelineCoverage}x`}
        />
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-xl font-semibold text-white">
        {value}
      </div>
    </div>
  );
}