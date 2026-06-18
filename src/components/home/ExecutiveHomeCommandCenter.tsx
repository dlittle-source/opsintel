import {
  Activity,
  BrainCircuit,
  Shield,
  TrendingUp,
} from "lucide-react";

import { getTenantBranding } from "@/lib/tenantBrandingEngine";

export default function ExecutiveHomeCommandCenter() {
  const branding = getTenantBranding();

  return (
    <section className="grid gap-4 md:grid-cols-4">
      <MetricCard
        title="Executive Readiness"
        value="94%"
        icon={<TrendingUp className="h-5 w-5" />}
        accent="text-emerald-300"
      />

      <MetricCard
        title="AI Confidence"
        value="96%"
        icon={<BrainCircuit className="h-5 w-5" />}
        accent="text-cyan-300"
      />

      <MetricCard
        title="Risk Posture"
        value="Low"
        icon={<Shield className="h-5 w-5" />}
        accent="text-violet-300"
      />

      <MetricCard
        title={`${branding.companyName} Health`}
        value="Operational"
        icon={<Activity className="h-5 w-5" />}
        accent="text-amber-300"
      />
    </section>
  );
}

function MetricCard({
  title,
  value,
  icon,
  accent,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/80 p-5 shadow-[0_0_35px_rgba(0,0,0,0.25)] backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/20 hover:bg-slate-900/90">
      <div className={`mb-3 ${accent}`}>
        {icon}
      </div>

      <div className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {title}
      </div>

      <div className="mt-2 text-2xl font-semibold text-white">
        {value}
      </div>
    </div>
  );
}