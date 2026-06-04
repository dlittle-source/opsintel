import {
  Users,
  Briefcase,
  Megaphone,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const motions = [
  {
    title: "Target Audience",
    description:
      "Platform engineers, DevOps leaders, cloud architects, consultants, and SaaS operators seeking executive visibility.",
    icon: Users,
  },
  {
    title: "Sales Motion",
    description:
      "Product-led adoption supported by executive demonstrations and enterprise upgrade paths.",
    icon: Briefcase,
  },
  {
    title: "Marketing Channels",
    description:
      "LinkedIn content, technical case studies, architecture showcases, YouTube demonstrations, and community engagement.",
    icon: Megaphone,
  },
  {
    title: "Growth Strategy",
    description:
      "Convert technical users into executive champions through operational intelligence and business impact visibility.",
    icon: TrendingUp,
  },
];

export default function GoToMarketIntelligence() {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
      <div className="mb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Go-To-Market Intelligence
        </p>

        <h2 className="text-2xl font-bold text-white">
          Customer Acquisition Strategy
        </h2>

        <p className="mt-2 max-w-3xl text-sm text-slate-400">
          Defines target audiences, acquisition channels, sales motions,
          growth opportunities, and commercialization execution strategy.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {motions.map((motion) => {
          const Icon = motion.icon;

          return (
            <div
              key={motion.title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
            >
              <Icon className="mb-4 h-5 w-5 text-cyan-300" />

              <h3 className="font-semibold text-white">
                {motion.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {motion.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-emerald-300">
              Go-To-Market Recommendation
            </div>

            <div className="mt-2 text-sm leading-6 text-slate-300">
              Focus initial growth on technical decision makers through
              architecture demonstrations, executive intelligence workflows,
              portfolio projects, and SaaS modernization use cases.
            </div>
          </div>

          <ArrowRight className="h-5 w-5 shrink-0 text-emerald-300" />
        </div>
      </div>
    </section>
  );
}