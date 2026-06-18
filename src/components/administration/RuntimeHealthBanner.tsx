import { AlertCircle, CheckCircle2 } from "lucide-react";

import { getEnterpriseTenantRuntime } from "@/lib/enterpriseTenantRuntimeEngine";
import { getLicensingRuntime } from "@/lib/licensingRuntimeEngine";

export default function RuntimeHealthBanner() {
  const runtime = getEnterpriseTenantRuntime();
  const licensing = getLicensingRuntime();

  const healthy =
    runtime.runtimeStatus === "operational" &&
    licensing.licenseActive;

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="flex items-start gap-3">
        {healthy ? (
          <CheckCircle2 className="mt-0.5 h-6 w-6 text-green-600" />
        ) : (
          <AlertCircle className="mt-0.5 h-6 w-6 text-amber-600" />
        )}

        <div className="flex-1">
          <h2 className="text-lg font-semibold">
            Runtime Health
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            {healthy
              ? "Tenant runtime is operational and licensing requirements are satisfied."
              : "One or more runtime conditions require attention."}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">
                Runtime:
              </span>{" "}
              <span className="font-medium">
                {runtime.runtimeStatus}
              </span>
            </div>

            <div>
              <span className="text-muted-foreground">
                Environment:
              </span>{" "}
              <span className="font-medium">
                {runtime.environment}
              </span>
            </div>

            <div>
              <span className="text-muted-foreground">
                License:
              </span>{" "}
              <span className="font-medium">
                {licensing.tier}
              </span>
            </div>

            <div>
              <span className="text-muted-foreground">
                Compliance:
              </span>{" "}
              <span className="font-medium">
                {licensing.complianceStatus}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}