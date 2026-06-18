import {
  CheckCircle2,
  CircleGauge,
  Layers,
  LifeBuoy,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getEnterpriseCapabilities } from "@/lib/enterpriseCapabilityEngine";
import { getEnterpriseReadiness } from "@/lib/enterpriseReadinessEngine";
import { getEnterpriseStatus } from "@/lib/enterpriseStatusEngine";
import { getAdministrationContext } from "@/lib/administrationContextEngine";

export default function AdministrationReadinessDashboard() {
  const capabilities = getEnterpriseCapabilities();
  const readiness = getEnterpriseReadiness();
  const status = getEnterpriseStatus();
  const context = getAdministrationContext();

  const readinessItems = [
    {
      label: "Branding Engine",
      status: capabilities.brandingEnabled ? "Connected" : "Disabled",
      icon: Sparkles,
    },
    {
      label: "Theme Configuration",
      status: capabilities.brandingEnabled ? "Active" : "Disabled",
      icon: Palette,
    },
    {
      label: "Logo Assets",
      status: capabilities.whiteLabelEnabled ? "Linked" : "Disabled",
      icon: Layers,
    },
    {
      label: "Commercial Status",
      status: readiness.commercialStatus,
      icon: ShieldCheck,
    },
    {
      label: "Support Configuration",
      status: context.tenant.supportEmail,
      icon: LifeBuoy,
    },
    {
      label: "White-Label Mode",
      status: readiness.whiteLabelStatus,
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="rounded-xl border bg-card p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Configuration Health
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            Administration Readiness Dashboard
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
            Validates whether tenant identity, branding, licensing, theme
            configuration, and support settings are ready for enterprise
            white-label delivery.
          </p>
        </div>

        <div className="rounded-xl border px-5 py-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <CircleGauge className="h-4 w-4" />
            Readiness Score
          </div>

          <div className="mt-2 text-3xl font-bold">
            {readiness.readinessScore}%
          </div>

          <div className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-400">
            {status.administrationStatus}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {readinessItems.map((item) => (
          <ReadinessItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            status={item.status}
          />
        ))}
      </div>
    </section>
  );
}

type ReadinessItemProps = {
  icon: React.ElementType;
  label: string;
  status: string;
};

function ReadinessItem({
  icon: Icon,
  label,
  status,
}: ReadinessItemProps) {
  return (
    <div className="rounded-xl border bg-muted/30 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-lg border bg-card p-2">
          <Icon className="h-5 w-5" />
        </div>

        <span className="rounded-full border px-3 py-1 text-xs font-medium text-emerald-400">
          Healthy
        </span>
      </div>

      <div className="mt-4 text-sm font-semibold">{label}</div>

      <div className="mt-1 break-all text-sm text-muted-foreground">
        {status}
      </div>
    </div>
  );
}