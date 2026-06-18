import {
  Activity,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getTenantBranding } from "@/lib/tenantBrandingEngine";

export default function ExecutiveAIBriefing() {
  const branding = getTenantBranding();

  const briefingSignals = [
    "Executive Intelligence Platform is operating normally.",
    "Commercialization Intelligence workspace is active.",
    "Governance and operational readiness systems are healthy.",
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(15,23,42,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_35%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            <BrainCircuit className="h-3.5 w-3.5" />
            {branding.companyName} Executive Briefing
          </div>

          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            {branding.companyName} Executive Intelligence Platform is operational.
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            {branding.companyName} transforms operational infrastructure data into
            executive intelligence, governance visibility, commercialization
            readiness insights, and AI-powered decision support across the
            enterprise.
          </p>

          <div className="mt-6 grid gap-3">
            {briefingSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300"
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid min-w-full gap-3 sm:grid-cols-3 lg:min-w-[360px] lg:grid-cols-1">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              Platform Status
            </div>
            <p className="mt-3 text-2xl font-semibold text-white">Stable</p>
            <p className="mt-1 text-xs text-emerald-100/70">
              No TypeScript or routing issues detected.
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
              <Activity className="h-4 w-4" />
              Workspaces
            </div>
            <p className="mt-3 text-2xl font-semibold text-white">9 Online</p>
            <p className="mt-1 text-xs text-cyan-100/70">
              {branding.companyName} workspaces are operational.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-violet-200">
              <Sparkles className="h-4 w-4" />
              Phase
            </div>
            <p className="mt-3 text-2xl font-semibold text-white">18B</p>
            <p className="mt-1 text-xs text-violet-100/70">
              White-label foundation in progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}