import {
  CheckCircle2,
  ShieldCheck,
  Users,
  XCircle,
} from "lucide-react";

import { getLicensingRuntime } from "@/lib/licensingRuntimeEngine";
import {
  getCapabilityResolution,
} from "@/lib/capabilityResolutionService";

export default function EnterpriseEntitlementDashboard() {
  const licensing = getLicensingRuntime();
  const resolution = getCapabilityResolution();

  const enabledCount = resolution.capabilities.filter(
    (capability) => capability.available,
  ).length;

  const disabledCount =
    resolution.capabilities.length - enabledCount;

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">
        Enterprise Entitlement Dashboard
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          icon={<ShieldCheck className="h-5 w-5" />}
          label="License Tier"
          value={licensing.tier}
        />

        <MetricCard
          icon={<Users className="h-5 w-5" />}
          label="Seat Usage"
          value={`${licensing.seatsInUse}/${licensing.seatLimit}`}
        />

        <MetricCard
          icon={<CheckCircle2 className="h-5 w-5" />}
          label="Enabled Features"
          value={enabledCount.toString()}
        />

        <MetricCard
          icon={<XCircle className="h-5 w-5" />}
          label="Disabled Features"
          value={disabledCount.toString()}
        />
      </div>

      <div className="mt-6 rounded-lg border p-4">
        <div className="text-sm text-muted-foreground">
          Compliance Status
        </div>

        <div className="mt-2 text-base font-semibold">
          {licensing.complianceStatus}
        </div>

        <div className="mt-1 text-sm text-muted-foreground">
          License Active:{" "}
          {licensing.licenseActive ? "Yes" : "No"}
        </div>

        <div className="mt-1 text-sm text-muted-foreground">
          Seats Available: {licensing.seatsAvailable}
        </div>
      </div>
    </div>
  );
}

type MetricCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function MetricCard({
  icon,
  label,
  value,
}: MetricCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>

      <div className="mt-2 text-xl font-semibold">
        {value}
      </div>
    </div>
  );
}