"use client";

import {
  Building2,
  TrendingUp,
  AlertTriangle,
  HeartPulse,
  DollarSign,
  Users,
} from "lucide-react";

import { getCustomerPortfolioSummary } from "@/lib/customerManagementEngine";
import { getCustomerHealthSummary } from "@/lib/customerHealthEngine";
import { getRevenueForecast } from "@/lib/revenueIntelligenceEngine";

import CustomerRiskCenter from "./CustomerRiskCenter";
import CustomerRetentionDashboard from "./CustomerRetentionDashboard";
import CustomerRetentionRecommendations from "./CustomerRetentionRecommendations";

export default function CustomerManagementWorkspace() {
  const portfolio = getCustomerPortfolioSummary();
  const health = getCustomerHealthSummary();
  const revenue = getRevenueForecast();

  const cards = [
    {
      label: "Customers",
      value: portfolio.totalCustomers,
      icon: Building2,
    },
    {
      label: "Enterprise Accounts",
      value: portfolio.enterpriseCustomers,
      icon: Users,
    },
    {
      label: "Avg Health",
      value: `${health.averageHealthScore}%`,
      icon: HeartPulse,
    },
    {
      label: "Revenue Opportunity",
      value: `$${Math.round(revenue.netRevenueOpportunity).toLocaleString()}`,
      icon: DollarSign,
    },
    {
      label: "Expansion Opportunities",
      value: portfolio.expansionOpportunities,
      icon: TrendingUp,
    },
    {
      label: "At-Risk Accounts",
      value: portfolio.atRiskCustomers,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.label}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>

              <div className="text-2xl font-bold text-white">{card.value}</div>

              <div className="mt-1 text-sm text-slate-400">{card.label}</div>
            </div>
          );
        })}
      </div>

      <div className="rounded-3xl border border-cyan-500/20 bg-slate-950/70 p-6">
        <div className="mb-4 text-lg font-semibold text-white">
          Executive Customer Intelligence
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Metric
            label="Projected Revenue"
            value={`$${revenue.projectedRevenue.toLocaleString()}`}
          />

          <Metric
            label="Renewal Revenue"
            value={`$${revenue.renewalRevenue.toLocaleString()}`}
          />

          <Metric
            label="Expansion Revenue"
            value={`$${revenue.expansionRevenue.toLocaleString()}`}
          />

          <Metric
            label="Revenue At Risk"
            value={`$${revenue.atRiskRevenue.toLocaleString()}`}
          />
        </div>
      </div>

      <CustomerRiskCenter />

      <CustomerRetentionDashboard />

      <CustomerRetentionRecommendations />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>

      <div className="mt-2 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}