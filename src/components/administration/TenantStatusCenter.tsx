import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";

import {
  getEnterpriseTenantRuntime,
} from "@/lib/enterpriseTenantRuntimeEngine";
import {
  getLicensingRuntime,
} from "@/lib/licensingRuntimeEngine";

export default function TenantStatusCenter() {
  const runtime = getEnterpriseTenantRuntime();
  const licensing = getLicensingRuntime();

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">
        Tenant Status Center
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <StatusRow
          icon={<Building2 className="h-4 w-4" />}
          label="Tenant"
          value={runtime.tenantName}
        />

        <StatusRow
          icon={<CheckCircle2 className="h-4 w-4" />}
          label="Runtime Status"
          value={runtime.runtimeStatus}
        />

        <StatusRow
          icon={<ShieldCheck className="h-4 w-4" />}
          label="License Tier"
          value={licensing.tier}
        />

        <StatusRow
          icon={<Users className="h-4 w-4" />}
          label="Seat Usage"
          value={`${licensing.seatsInUse} / ${licensing.seatLimit}`}
        />
      </div>
    </div>
  );
}

type StatusRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function StatusRow({
  icon,
  label,
  value,
}: StatusRowProps) {
  return (
    <div className="rounded-lg border p-4">
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        {icon}
        <span>{label}</span>
      </div>

      <div className="mt-2 text-base font-semibold">
        {value}
      </div>
    </div>
  );
}