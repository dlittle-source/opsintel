import {
  BadgeDollarSign,
  Calculator,
  Coins,
  Wallet,
} from "lucide-react";

export default function RuntimeCostOverview() {
  const items = [
    {
      title: "Resource Spend",
      status: "$48.2K",
      icon: BadgeDollarSign,
    },
    {
      title: "Budget Utilization",
      status: "81%",
      icon: Wallet,
    },
    {
      title: "Cost Efficiency",
      status: "Healthy",
      icon: Coins,
    },
    {
      title: "Forecast Accuracy",
      status: "Stable",
      icon: Calculator,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Cost Overview
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Executive visibility into spending, efficiency,
          budget utilization, and runtime financial health.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div>
                  <p className="text-sm font-medium">
                    {item.title}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {item.status}
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