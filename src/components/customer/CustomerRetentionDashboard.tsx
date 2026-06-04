import {
  RefreshCcw,
  ShieldAlert,
  TrendingUp,
  HeartPulse,
} from "lucide-react";

import {
  getCustomerRetentionSummary,
} from "@/lib/customerRetentionEngine";

export default function CustomerRetentionDashboard() {
  const summary = getCustomerRetentionSummary();

  const metrics = [
    {
      label: "Avg Health Score",
      value: `${summary.averageHealthScore}%`,
      icon: HeartPulse,
    },
    {
      label: "Avg Churn Probability",
      value: `${summary.averageChurnProbability}%`,
      icon: ShieldAlert,
    },
    {
      label: "Renewal Confidence",
      value: `${summary.averageRenewalConfidence}%`,
      icon: RefreshCcw,
    },
    {
      label: "Expansion Ready",
      value: summary.expansionReadyCustomers,
      icon: TrendingUp,
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Customer Retention Intelligence
          </p>

          <h2 className="text-2xl font-bold text-white">
            Predictive Retention Dashboard
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            AI-powered churn forecasting, renewal confidence tracking,
            customer lifetime value monitoring, and expansion readiness
            analysis.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-3">
          <div className="text-xs text-slate-400">
            Lifetime Value
          </div>

          <div className="text-lg font-semibold text-cyan-300">
            ${summary.totalLifetimeValue.toLocaleString()}
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

      <div className="mt-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
        <div className="text-sm font-medium text-amber-300">
          High Risk Accounts
        </div>

        <div className="mt-2 text-3xl font-bold text-white">
          {summary.highRiskCustomers}
        </div>

        <div className="mt-2 text-sm text-slate-400">
          Customers requiring executive retention review and renewal
          intervention.
        </div>
      </div>
    </section>
  );
}