import {
  CheckCircle2,
  Clock3,
  FileCog,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const events = [
  {
    title: "Company Profile Registered",
    description:
      "Organization metadata successfully synchronized with the enterprise configuration registry.",
    icon: FileCog,
  },
  {
    title: "Platform Identity Applied",
    description:
      "Platform branding and identity settings were successfully validated.",
    icon: ShieldCheck,
  },
  {
    title: "Theme Configuration Updated",
    description:
      "Enterprise theme engine synchronized visual configuration settings.",
    icon: Palette,
  },
  {
    title: "White-Label Rules Verified",
    description:
      "Tenant customization policies successfully passed validation.",
    icon: Sparkles,
  },
  {
    title: "Configuration Registry Healthy",
    description:
      "All enterprise configuration modules are synchronized and operational.",
    icon: CheckCircle2,
  },
];

export default function ConfigurationTimeline() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Configuration Timeline
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Recent enterprise configuration events across the
          white-label administration platform.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {events.map((event) => {
          const Icon = event.icon;

          return (
            <div
              key={event.title}
              className="flex gap-4 rounded-lg border bg-background p-4"
            >
              <div className="rounded-lg border bg-card p-2 h-fit">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold">
                    {event.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock3 className="h-3.5 w-3.5" />
                    Latest
                  </div>
                </div>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {event.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}