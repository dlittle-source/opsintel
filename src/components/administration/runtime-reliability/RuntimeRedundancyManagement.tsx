import {
  Database,
  HardDrive,
  Network,
  ShieldCheck,
} from "lucide-react";

export default function RuntimeRedundancyManagement() {
  const redundancyItems = [
    {
      label: "Database Replication",
      value: "Enabled",
      icon: Database,
    },
    {
      label: "Storage Redundancy",
      value: "Healthy",
      icon: HardDrive,
    },
    {
      label: "Network Resilience",
      value: "Protected",
      icon: Network,
    },
    {
      label: "Failover Readiness",
      value: "Ready",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold">
          Runtime Redundancy Management
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Redundancy intelligence ensures that critical runtime services,
          storage layers, and networking paths remain protected against
          single-point failures.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {redundancyItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-xl border bg-background p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {item.label}
                  </p>

                  <p className="text-lg font-semibold">
                    {item.value}
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