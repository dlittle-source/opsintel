import {
  CircleDollarSign,
  Landmark,
  Scale,
  Wallet,
} from "lucide-react";

export default function RuntimeBudgetManagement() {
  const budgets = [
    {
      label: "Budget Allocation",
      value: "$60,000",
      icon: Wallet,
    },
    {
      label: "Current Spend",
      value: "$48,200",
      icon: CircleDollarSign,
    },
    {
      label: "Financial Governance",
      value: "Healthy",
      icon: Landmark,
    },
    {
      label: "Budget Compliance",
      value: "Within Limits",
      icon: Scale,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Budget Management
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Budget governance and financial controls for enterprise
          runtime operations and infrastructure resources.
        </p>
      </div>

      <div className="space-y-4">
        {budgets.map((budget) => {
          const Icon = budget.icon;

          return (
            <div
              key={budget.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {budget.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {budget.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}