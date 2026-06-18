import {
  CheckCircle2,
  Database,
  FileCog,
  KeyRound,
  Layers3,
  Palette,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const registryItems = [
  {
    label: "Company Profile",
    description: "Controls organization identity, industry context, and enterprise profile metadata.",
    status: "Configured",
    icon: Database,
  },
  {
    label: "Platform Identity",
    description: "Defines product name, platform category, and external SaaS positioning.",
    status: "Configured",
    icon: ShieldCheck,
  },
  {
    label: "Logo Management",
    description: "Manages tenant logo assets across sidebar, dashboard, login, and favicon surfaces.",
    status: "Configured",
    icon: Layers3,
  },
  {
    label: "Theme Configuration",
    description: "Controls sidebar theme, executive theme, button style, and interface radius.",
    status: "Configured",
    icon: Palette,
  },
  {
    label: "Color Palette",
    description: "Defines primary, accent, background, surface, border, and text colors.",
    status: "Configured",
    icon: SlidersHorizontal,
  },
  {
    label: "Development Rules",
    description: "Tracks white-label enablement, development mode, and enterprise safety controls.",
    status: "Configured",
    icon: KeyRound,
  },
];

export default function EnterpriseConfigurationRegistry() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FileCog className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">
              Enterprise Configuration Registry
            </h2>
          </div>

          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Central registry for enterprise white-label configuration modules,
            tenant-facing controls, and SaaS administration surfaces.
          </p>
        </div>

        <div className="rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          {registryItems.length} Modules
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {registryItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-lg border bg-background p-4 transition hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-lg border bg-card p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {item.status}
                </div>
              </div>

              <h3 className="mt-4 text-sm font-semibold">{item.label}</h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}