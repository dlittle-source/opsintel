import {
  Activity,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { getEnterpriseTenantRuntime } from "@/lib/enterpriseTenantRuntimeEngine";
import { getLicensingRuntime } from "@/lib/licensingRuntimeEngine";

export default function AdministrationRuntimeOverview() {
  const runtime = getEnterpriseTenantRuntime();
  const licensing = getLicensingRuntime();

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <RuntimeCard
        icon={<Activity className="h-5 w-5" />}
        label="Runtime"
        value={runtime.runtimeStatus}
      />

      <RuntimeCard
        icon={<ShieldCheck className="h-5 w-5" />}
        label="License"
        value={licensing.tier}
      />

      <RuntimeCard
        icon={<Users className="h-5 w-5" />}
        label="Active Users"
        value={runtime.activeUsers.toString()}
      />

      <RuntimeCard
        icon={<Sparkles className="h-5 w-5" />}
        label="Environment"
        value={runtime.environment}
      />
    </div>
  );
}

type RuntimeCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function RuntimeCard({
  icon,
  label,
  value,
}: RuntimeCardProps) {
  return (
    <div className="rounded-xl border bg-card p-5">
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