import {
  CheckCircle2,
  Rocket,
  Users,
  Package,
  ShieldCheck,
} from "lucide-react";

const readinessAreas = [
  {
    title: "Product Readiness",
    score: "92%",
    description:
      "Core platform intelligence, executive workflows, and workspace architecture are operational.",
    icon: Package,
  },
  {
    title: "Customer Readiness",
    score: "85%",
    description:
      "Customer onboarding, retention intelligence, and executive visibility workflows are established.",
    icon: Users,
  },
  {
    title: "Operational Readiness",
    score: "90%",
    description:
      "Platform stability, multi-tenant capabilities, and operational monitoring are mature.",
    icon: ShieldCheck,
  },
  {
    title: "Launch Readiness",
    score: "88%",
    description:
      "Commercialization strategy, packaging, and go-to-market preparation are progressing.",
    icon: Rocket,
  },
];

export default function LaunchReadinessDashboard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Launch Readiness Dashboard
        </p>

        <h2 className="text-2xl font-bold text-white">
          Commercial Launch Assessment
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Executive evaluation of platform readiness across product,
          customer, operational, and commercialization dimensions.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {readinessAreas.map((area) => {
          const Icon = area.icon;

          return (
            <div
              key={area.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <div className="text-xl font-bold text-white">
                {area.score}
              </div>

              <div className="mt-1 font-medium text-white">
                {area.title}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {area.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-sm font-medium text-emerald-300">
              Launch Readiness Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Continue refining onboarding, pricing strategy, and go-to-market
              assets while maintaining platform stability and executive
              workflow quality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}