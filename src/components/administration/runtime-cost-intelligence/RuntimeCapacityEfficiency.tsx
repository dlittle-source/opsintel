import {
  BarChart3,
  Cpu,
  Gauge,
  Server,
} from "lucide-react";

export default function RuntimeCapacityEfficiency() {
  const capacities = [
    {
      label: "Resource Utilization",
      value: "87%",
      icon: Gauge,
    },
    {
      label: "Compute Efficiency",
      value: "Healthy",
      icon: Cpu,
    },
    {
      label: "Infrastructure Capacity",
      value: "Stable",
      icon: Server,
    },
    {
      label: "Optimization Score",
      value: "92%",
      icon: BarChart3,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Capacity Efficiency
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Capacity planning and utilization intelligence providing
          operational efficiency across enterprise runtime resources.
        </p>
      </div>

      <div className="space-y-4">
        {capacities.map((capacity) => {
          const Icon = capacity.icon;

          return (
            <div
              key={capacity.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {capacity.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {capacity.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}