import {
  BadgeDollarSign,
  Cpu,
  Database,
  Server,
} from "lucide-react";

export default function RuntimeResourceSpendCenter() {
  const resources = [
    {
      label: "Compute Spend",
      value: "$19,400",
      icon: Server,
    },
    {
      label: "Database Spend",
      value: "$8,700",
      icon: Database,
    },
    {
      label: "AI Runtime Costs",
      value: "$6,300",
      icon: Cpu,
    },
    {
      label: "Total Resource Spend",
      value: "$48,200",
      icon: BadgeDollarSign,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Resource Spend Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Visibility into infrastructure spending and resource
          consumption across enterprise runtime services.
        </p>
      </div>

      <div className="space-y-4">
        {resources.map((resource) => {
          const Icon = resource.icon;

          return (
            <div
              key={resource.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {resource.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {resource.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}