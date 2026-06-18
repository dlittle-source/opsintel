import {
  ArrowDown,
  Building2,
  Layers3,
  Palette,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const dependencies = [
  {
    title: "Company Profile",
    description:
      "Provides organization metadata consumed by platform identity.",
    icon: Building2,
  },
  {
    title: "Platform Identity",
    description:
      "Defines platform branding consumed by logo management.",
    icon: ShieldCheck,
  },
  {
    title: "Logo Management",
    description:
      "Supplies visual assets used by theme configuration.",
    icon: Layers3,
  },
  {
    title: "Theme Configuration",
    description:
      "Provides UI styling consumed by enterprise color palette.",
    icon: Palette,
  },
  {
    title: "Color Palette",
    description:
      "Supplies visual tokens consumed by runtime configuration.",
    icon: Settings2,
  },
];

export default function ConfigurationDependencyGraph() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Configuration Dependency Graph
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Enterprise visualization of configuration relationships and
          dependency flow across the white-label platform.
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {dependencies.map((dependency, index) => {
          const Icon = dependency.icon;
          const isLast = index === dependencies.length - 1;

          return (
            <div key={dependency.title}>
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border bg-card p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold">
                      {dependency.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {dependency.description}
                    </p>
                  </div>
                </div>
              </div>

              {!isLast && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-muted-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}