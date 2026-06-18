import { Gauge } from "lucide-react";

import { getRuntimeOptimizationSnapshot } from "@/lib/runtimeOptimizationEngine";

export default function RuntimeOptimizationSection() {
  const optimization = getRuntimeOptimizationSnapshot();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <Gauge className="h-5 w-5 text-primary" />

        <h2 className="text-xl font-semibold tracking-tight">
          Runtime Optimization
        </h2>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Runtime efficiency recommendations focused on cost reduction,
        performance improvement, and operational optimization.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <MetricCard
          label="Optimization Status"
          value={optimization.optimizationStatus}
        />

        <MetricCard
          label="Recommendations"
          value={String(optimization.recommendations)}
        />

        <MetricCard
          label="Projected Savings"
          value={optimization.projectedSavings}
        />
      </div>

      <div className="mt-6 space-y-3">
        {optimization.items.map((item) => (
          <div
            key={item.category}
            className="rounded-lg border bg-card p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <p className="font-medium">
                {item.category}
              </p>

              <p className="text-sm text-muted-foreground">
                {item.impact} Impact
              </p>
            </div>

            <p className="mt-2 text-2xl font-bold">
              {item.savings}
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
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