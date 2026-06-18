import {
  BadgeCheck,
  Clock3,
  FileClock,
} from "lucide-react";

import { getEnterpriseConfigurationAuditEvents } from "@/lib/enterpriseConfigurationAuditEngine";

export default function ConfigurationAuditTimeline() {
  const events = getEnterpriseConfigurationAuditEvents();

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-center gap-2">
        <FileClock className="h-5 w-5 text-primary" />

        <h2 className="text-lg font-semibold">
          Configuration Audit Timeline
        </h2>
      </div>

      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
        Enterprise audit history generated from the configuration
        audit engine. This timeline provides the foundation for
        future governance, compliance, and change tracking.
      </p>

      <div className="mt-6 space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="rounded-lg border bg-background p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold">
                  {event.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {event.category}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  {event.status}
                </div>

                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock3 className="h-3.5 w-3.5" />
                  {event.timestamp}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}