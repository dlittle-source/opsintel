import {
  ArrowRight,
  Award,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import { getTenantBranding } from "@/lib/tenantBrandingEngine";

export default function ExecutiveHomeCompletionBanner() {
  const branding = getTenantBranding();

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_50px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_35%)]" />
      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
            <Award className="h-3.5 w-3.5" />
            {branding.companyName} Platform Status
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
            AI-Powered Executive Infrastructure Intelligence Platform Ready
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            {branding.companyName} unifies executive intelligence, governance
            visibility, commercialization readiness, operational posture, and
            AI-assisted decision support into one enterprise operating
            experience.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <BrainCircuit className="h-4 w-4 text-cyan-300" />
            <p className="mt-3 text-sm font-semibold text-white">
              Executive Intelligence
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Readiness scoring and decision support.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <Sparkles className="h-4 w-4 text-violet-300" />
            <p className="mt-3 text-sm font-semibold text-white">
              White-Label Ready
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              Built for SaaS and partner licensing.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <ArrowRight className="h-4 w-4 text-emerald-300" />
            <p className="mt-3 text-sm font-semibold text-white">
              Commercial Launch Ready
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-400">
              SaaS, consulting, and white-label aligned.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}