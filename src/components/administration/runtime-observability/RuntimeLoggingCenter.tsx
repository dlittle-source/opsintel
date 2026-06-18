import {
  Database,
  FileText,
  ScrollText,
  Search,
} from "lucide-react";

export default function RuntimeLoggingCenter() {
  const logs = [
    {
      label: "Log Streams",
      value: "42 Active",
      icon: FileText,
    },
    {
      label: "Event Records",
      value: "1.2M",
      icon: ScrollText,
    },
    {
      label: "Log Search",
      value: "Enabled",
      icon: Search,
    },
    {
      label: "Storage Retention",
      value: "90 Days",
      icon: Database,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Logging Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Centralized runtime log aggregation, event collection,
          search capabilities, and retention visibility across
          enterprise workloads.
        </p>
      </div>

      <div className="space-y-4">
        {logs.map((log) => {
          const Icon = log.icon;

          return (
            <div
              key={log.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {log.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {log.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}