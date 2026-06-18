import { Network } from "lucide-react";

import { getRuntimeDependencySnapshot } from "@/lib/runtimeDependencyEngine";

export default function RuntimeDependencySection() {
  const dependency = getRuntimeDependencySnapshot();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <Network className="h-5 w-5 text-primary" />

        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Dependency Graph
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Enterprise visibility into service relationships,
        infrastructure dependencies, and runtime connectivity.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Overall Status"
          value={dependency.overallStatus}
        />

        <MetricCard
          label="Monitored Services"
          value={String(dependency.monitoredServices)}
        />

        <MetricCard
          label="Dependencies"
          value={String(dependency.dependencyRelationships)}
        />
      </div>

      <div className="mt-6 space-y-3">
        {dependency.services.map((service) => (
          <div
            key={service.service}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">
                {service.service}
              </p>

              <p className="text-sm text-muted-foreground">
                {service.status}
              </p>
            </div>

            <p className="mt-2 text-2xl font-bold">
              {service.dependencies}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard({
  label,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <p className="text-sm text-muted-foreground">
        {label}
      </p>

      <p className="mt-2 text-xl font-bold">
        {value}
      </p>
    </div>
  );
}