import {
  Activity,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getRuntimeStatusSnapshot } from "@/lib/runtimeStatusAggregator";

export default function EnterpriseRuntimeSnapshot() {
  const snapshot = getRuntimeStatusSnapshot();

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">
        Enterprise Runtime Snapshot
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <SnapshotCard
          icon={<Activity className="h-5 w-5" />}
          label="Overall Status"
          value={snapshot.overallStatus}
        />

        <SnapshotCard
          icon={<ShieldCheck className="h-5 w-5" />}
          label="Licensing Tier"
          value={snapshot.licensingTier}
        />

        <SnapshotCard
          icon={<Sparkles className="h-5 w-5" />}
          label="Capabilities"
          value={`${snapshot.enabledCapabilities}/${snapshot.totalCapabilities}`}
        />

        <SnapshotCard
          icon={<CheckCircle2 className="h-5 w-5" />}
          label="Compliance"
          value={snapshot.complianceStatus}
        />
      </div>
    </div>
  );
}

type SnapshotCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function SnapshotCard({
  icon,
  label,
  value,
}: SnapshotCardProps) {
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