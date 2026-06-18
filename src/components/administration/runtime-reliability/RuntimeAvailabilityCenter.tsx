import {
  Activity,
  Clock3,
  Server,
  Signal,
} from "lucide-react";

export default function RuntimeAvailabilityCenter() {
  const availabilityMetrics = [
    {
      label: "Platform Uptime",
      value: "99.98%",
      icon: Signal,
    },
    {
      label: "Service Health",
      value: "Healthy",
      icon: Activity,
    },
    {
      label: "Active Runtime Nodes",
      value: "18",
      icon: Server,
    },
    {
      label: "Mean Response Time",
      value: "142 ms",
      icon: Clock3,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Availability Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Availability metrics provide continuous visibility into runtime
          service health, node participation, uptime posture, and response
          performance across tenant environments.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {availabilityMetrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.label}
              className="rounded-xl border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {metric.label}
                  </p>

                  <p className="text-lg font-semibold">
                    {metric.value}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}