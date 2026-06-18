import {
  Fingerprint,
  KeyRound,
  Lock,
  UserCheck,
} from "lucide-react";

export default function RuntimeIdentityProtection() {
  const controls = [
    {
      label: "Multi-Factor Authentication",
      value: "Enabled",
      icon: Fingerprint,
    },
    {
      label: "Privileged Accounts",
      value: "12 Active",
      icon: KeyRound,
    },
    {
      label: "Access Policies",
      value: "Protected",
      icon: Lock,
    },
    {
      label: "Identity Verification",
      value: "Healthy",
      icon: UserCheck,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Identity Protection
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Monitor identity posture, authentication controls, access
          privileges, and user verification across the enterprise runtime.
        </p>
      </div>

      <div className="space-y-4">
        {controls.map((control) => {
          const Icon = control.icon;

          return (
            <div
              key={control.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {control.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {control.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}