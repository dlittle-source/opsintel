import {
  BadgeDollarSign,
  Calculator,
  Coins,
  TrendingDown,
} from "lucide-react";

export default function RuntimeCostExecutiveSummary() {
  const metrics = [
    {
      label: "Monthly Spend",
      value: "$48,200",
      icon: BadgeDollarSign,
    },
    {
      label: "Optimization Savings",
      value: "$7,500",
      icon: TrendingDown,
    },
    {
      label: "Budget Health",
      value: "Healthy",
      icon: Calculator,
    },
    {
      label: "Cost Efficiency",
      value: "92%",
      icon: Coins,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          Phase 18U — Enterprise Runtime Cost Intelligence Suite
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight">
          Runtime Cost Executive Summary
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
          Enterprise cost intelligence providing visibility into
          spending, optimization opportunities, forecasting, and
          efficiency across runtime resources.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-background/60 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    {metric.label}
                  </p>

                  <p className="text-sm font-semibold">
                    {metric.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}