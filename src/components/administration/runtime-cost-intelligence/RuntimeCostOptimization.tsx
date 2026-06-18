import {
  BadgeDollarSign,
  PiggyBank,
  TrendingDown,
  Zap,
} from "lucide-react";

export default function RuntimeCostOptimization() {
  const optimizations = [
    {
      label: "Potential Savings",
      value: "$7,500",
      icon: PiggyBank,
    },
    {
      label: "Cost Reduction",
      value: "15%",
      icon: TrendingDown,
    },
    {
      label: "Optimization Policies",
      value: "Enabled",
      icon: Zap,
    },
    {
      label: "Optimized Spend",
      value: "$40,700",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Cost Optimization
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          AI-driven cost reduction and optimization insights across
          infrastructure, compute, and runtime services.
        </p>
      </div>

      <div className="space-y-4">
        {optimizations.map((optimization) => {
          const Icon = optimization.icon;

          return (
            <div
              key={optimization.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {optimization.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {optimization.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}