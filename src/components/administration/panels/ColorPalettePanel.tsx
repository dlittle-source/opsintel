import { Palette, PaintBucket } from "lucide-react";

import { getAdministrationContext } from "@/lib/administrationContextEngine";
import { getEnterpriseMetadata } from "@/lib/enterpriseMetadataEngine";
import { getEnterpriseStatus } from "@/lib/enterpriseStatusEngine";

function getStringValue(
  source: Record<string, unknown>,
  keys: string[],
  fallback: string,
) {
  for (const key of keys) {
    const value = source[key];

    if (typeof value === "string" && value.length > 0) {
      return value;
    }
  }

  return fallback;
}

export default function ColorPalettePanel() {
  const context = getAdministrationContext() as unknown as Record<
    string,
    unknown
  >;

  const metadata = getEnterpriseMetadata() as unknown as Record<
    string,
    unknown
  >;

  const status = getEnterpriseStatus() as unknown as Record<string, unknown>;

  const primaryColor = getStringValue(
    context,
    ["primaryColor", "brandPrimary"],
    "#2563eb",
  );

  const secondaryColor = getStringValue(
    context,
    ["secondaryColor", "brandSecondary"],
    "#1e293b",
  );

  const accentColor = getStringValue(
    context,
    ["accentColor", "brandAccent"],
    "#06b6d4",
  );

  const backgroundColor = getStringValue(
    context,
    ["backgroundColor", "surfaceColor"],
    "#0f172a",
  );

  const platformName = getStringValue(
    metadata,
    ["platformName", "name", "productName"],
    "OpsIntel",
  );

  const paletteStatus = getStringValue(
    status,
    ["paletteStatus", "themeStatus", "platformStatus"],
    "Active",
  );

  const colors = [
    {
      label: "Primary Color",
      value: primaryColor,
    },
    {
      label: "Secondary Color",
      value: secondaryColor,
    },
    {
      label: "Accent Color",
      value: accentColor,
    },
    {
      label: "Background Color",
      value: backgroundColor,
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
            Color Palette
          </p>

          <h2 className="mt-2 flex items-center gap-2 text-2xl font-semibold text-white">
            <Palette className="h-6 w-6 text-cyan-300" />
            Enterprise Brand Colors
          </h2>

          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Centralized color palette configuration for the active
            white-label deployment of {platformName}.
          </p>
        </div>

        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
          {paletteStatus}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {colors.map((color) => (
          <div
            key={color.label}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <PaintBucket className="h-5 w-5" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                  {color.label}
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-100">
                  {color.value}
                </p>
              </div>
            </div>

            <div
              className="h-10 w-10 rounded-full border border-slate-700"
              style={{
                backgroundColor: color.value,
              }}
              aria-label={`${color.label} preview`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}