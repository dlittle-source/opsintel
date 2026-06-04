import { HeartPulse, AlertTriangle, ShieldCheck, Activity } from "lucide-react";

import {
  getCustomerHealthInsights,
  getCustomerHealthSummary,
} from "@/lib/customerHealthEngine";

const classificationStyles = {
  excellent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  healthy: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
  watch: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  critical: "border-red-500/30 bg-red-500/10 text-red-300",
};

export default function CustomerHealthIntelligencePanel() {
  const summary = getCustomerHealthSummary();
  const insights = getCustomerHealthInsights();

  const summaryCards = [
    {
      label: "Excellent",
      value: summary.excellent,
      icon: ShieldCheck,
      className: "text-emerald-300",
    },
    {
      label: "Healthy",
      value: summary.healthy,
      icon: HeartPulse,
      className: "text-cyan-300",
    },
    {
      label: "Watch",
      value: summary.watch,
      icon: Activity,
      className: "text-amber-300",
    },
    {
      label: "Critical",
      value: summary.critical,
      icon: AlertTriangle,
      className: "text-red-300",
    },
  ];

  return (
    <section className="rounded-3xl border border-cyan-500/20 bg-slate-950/80 p-6 shadow-[0_0_40px_rgba(8,145,178,0.08)]">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] text-cyan-300">
            Customer Health Intelligence
          </div>
          <h2 className="mt-2 text-xl font-semibold text-white">
            Account Health Command Center
          </h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-400">
            Executive visibility into account health, adoption posture, churn
            exposure, and customer success action priorities.
          </p>
        </div>

        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-300">
          Avg Health {summary.averageHealthScore}%
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {summaryCards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <Icon className={`h-5 w-5 ${card.className}`} />
                <span className="text-xs text-slate-500">Accounts</span>
              </div>

              <div className="text-2xl font-bold text-white">
                {card.value}
              </div>

              <div className="mt-1 text-sm text-slate-400">
                {card.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 space-y-3">
        {insights.map((customer) => (
          <div
            key={customer.customerId}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="font-medium text-white">
                  {customer.customerName}
                </div>
                <div className="mt-1 text-sm text-slate-400">
                  Adoption {customer.adoptionScore}% · Churn Risk{" "}
                  {customer.churnRisk}% · Expansion {customer.expansionScore}%
                </div>
              </div>

              <span
                className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                  classificationStyles[customer.classification]
                }`}
              >
                {customer.classification.toUpperCase()}
              </span>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <InsightList title="Strengths" items={customer.strengths} />
              <InsightList title="Concerns" items={customer.concerns} />
            </div>

            <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-sm text-cyan-100">
              {customer.executiveRecommendation}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function InsightList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-slate-950/60 p-3">
      <div className="mb-2 text-xs uppercase tracking-wide text-slate-500">
        {title}
      </div>

      {items.length > 0 ? (
        <div className="space-y-1">
          {items.map((item) => (
            <div key={item} className="text-sm text-slate-300">
              • {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-sm text-slate-500">No major signals detected</div>
      )}
    </div>
  );
}