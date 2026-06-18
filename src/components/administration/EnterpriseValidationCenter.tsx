import {
  BadgeCheck,
  CheckCircle2,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const validations = [
  {
    title: "Company Profile",
    status: "Passed",
    description:
      "Organization metadata satisfies enterprise configuration requirements.",
    icon: BadgeCheck,
  },
  {
    title: "Platform Identity",
    status: "Passed",
    description:
      "Platform branding and identity configuration are synchronized.",
    icon: ShieldCheck,
  },
  {
    title: "Logo Management",
    status: "Passed",
    description:
      "Enterprise logo assets are registered and available to runtime components.",
    icon: Layers3,
  },
  {
    title: "Theme Configuration",
    status: "Passed",
    description:
      "Theme engine configuration has been validated successfully.",
    icon: Palette,
  },
  {
    title: "White-Label Configuration",
    status: "Passed",
    description:
      "Tenant customization rules satisfy enterprise validation policies.",
    icon: Sparkles,
  },
];

export default function EnterpriseValidationCenter() {
  return (
    <section className="rounded-xl border bg-card p-6">
      <div>
        <h2 className="text-lg font-semibold">
          Enterprise Validation Center
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Centralized validation status for enterprise configuration modules,
          ensuring production readiness and future compatibility with the
          Enterprise Configuration Engine.
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {validations.map((validation) => {
          const Icon = validation.icon;

          return (
            <div
              key={validation.title}
              className="rounded-lg border bg-background p-4 transition hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg border bg-card p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold">
                      {validation.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {validation.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {validation.status}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}