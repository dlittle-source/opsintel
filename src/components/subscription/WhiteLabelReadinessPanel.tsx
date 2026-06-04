import {
  BadgeCheck,
  Building2,
  Globe,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function WhiteLabelReadinessPanel() {
  const readinessItems = [
    {
      icon: Building2,
      title: "Tenant Branding",
      description:
        "Support for organization-specific application branding.",
    },
    {
      icon: Palette,
      title: "Custom Themes",
      description:
        "Enterprise theme and color customization foundation.",
    },
    {
      icon: Globe,
      title: "Custom Domains",
      description:
        "Prepared for customer-owned domain mapping.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Packaging",
      description:
        "Ready for reseller and enterprise deployments.",
    },
  ];

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            <Sparkles className="h-4 w-4" />
            White-Label Foundation
          </div>

          <h2 className="text-2xl font-semibold text-white">
            Enterprise White-Label Readiness
          </h2>

          <p className="mt-2 max-w-2xl text-sm text-slate-400">
            The platform is now prepared for enterprise branding,
            tenant customization, reseller packaging, and future
            multi-tenant deployments.
          </p>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <div className="flex items-center gap-2 text-emerald-300">
            <BadgeCheck className="h-4 w-4" />
            <span className="font-medium">
              Enterprise Ready
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {readinessItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Icon className="h-5 w-5 text-violet-300" />
              </div>

              <h3 className="text-sm font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}