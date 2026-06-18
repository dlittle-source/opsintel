import { ArrowRight, BrainCircuit, Building2, Sparkles } from "lucide-react";

export default function ExecutiveHomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_35%)]" />

      <div className="relative z-10 max-w-5xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
          <Sparkles className="h-4 w-4" />
          OpsIntel
        </div>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          AI-Powered Executive Infrastructure Intelligence Platform
        </h1>

        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
          OpsIntel transforms operational infrastructure data into executive-level
          intelligence, readiness scoring, governance visibility, commercialization
          insights, and strategic decision support for modern cloud and DevOps
          organizations.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm font-medium text-cyan-200">
          <span>Executive Intelligence</span>
          <span className="text-slate-500">•</span>
          <span>Commercialization</span>
          <span className="text-slate-500">•</span>
          <span>Governance</span>
          <span className="text-slate-500">•</span>
          <span>AI Decision Support</span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <BrainCircuit className="h-4 w-4 text-cyan-300" />
            Executive Intelligence
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <Building2 className="h-4 w-4 text-violet-300" />
            White-Label Ready Platform
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
            <ArrowRight className="h-4 w-4 text-emerald-300" />
            Hybrid SaaS + Consulting Model
          </div>
        </div>
      </div>
    </section>
  );
}