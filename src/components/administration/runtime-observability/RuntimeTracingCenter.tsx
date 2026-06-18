import {
  GitBranch,
  Route,
  ScanLine,
  Workflow,
} from "lucide-react";

export default function RuntimeTracingCenter() {
  const traces = [
    {
      label: "Distributed Traces",
      value: "Active",
      icon: Route,
    },
    {
      label: "Execution Paths",
      value: "Visible",
      icon: Workflow,
    },
    {
      label: "Request Correlation",
      value: "Healthy",
      icon: GitBranch,
    },
    {
      label: "Trace Coverage",
      value: "98%",
      icon: ScanLine,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Tracing Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Distributed tracing intelligence providing visibility into
          execution paths, service dependencies, and request flows
          across enterprise workloads.
        </p>
      </div>

      <div className="space-y-4">
        {traces.map((trace) => {
          const Icon = trace.icon;

          return (
            <div
              key={trace.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {trace.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {trace.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}