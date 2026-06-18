import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import {
  getCapabilityResolution,
} from "@/lib/capabilityResolutionService";

export default function RuntimeFeatureMatrix() {
  const resolution = getCapabilityResolution();

  return (
    <div className="rounded-xl border bg-card p-6">
      <h2 className="text-lg font-semibold">
        Runtime Feature Matrix
      </h2>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b">
            <tr className="text-left">
              <th className="pb-3 font-medium">
                Feature
              </th>

              <th className="pb-3 font-medium">
                Status
              </th>

              <th className="pb-3 font-medium">
                Resolution
              </th>
            </tr>
          </thead>

          <tbody>
            {resolution.capabilities.map((capability) => (
              <tr
                key={capability.key}
                className="border-b last:border-0"
              >
                <td className="py-4">
                  {capability.name}
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-2">
                    {capability.available ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        Enabled
                      </>
                    ) : (
                      <>
                        <XCircle className="h-4 w-4 text-red-600" />
                        Disabled
                      </>
                    )}
                  </div>
                </td>

                <td className="py-4 text-muted-foreground">
                  {capability.reason}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}