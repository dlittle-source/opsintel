"use client";

import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Crown,
  Gauge,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

const platformHighlights = [
  "Executive AI intelligence",
  "Autonomous infrastructure advisory",
  "Deployment risk forecasting",
  "Incident correlation intelligence",
  "Multi-cloud governance visibility",
  "ROI and monetization readiness",
];

const readinessMetrics = [
  { label: "Enterprise Readiness", value: "96%" },
  { label: "Demo Confidence", value: "98%" },
  { label: "White-Label Potential", value: "94%" },
];

export default function FinalExecutivePresentationLayer() {
  return (
    <section className="relative mt-6 overflow-hidden rounded-3xl border border-yellow-400/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_120px_rgba(250,204,21,0.10)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_35%)]" />

      <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-yellow-400/30 bg-yellow-400/10 p-4 shadow-[0_0_50px_rgba(250,204,21,0.16)]">
            <Crown className="h-7 w-7 text-yellow-300" />
          </div>

          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-yellow-200">
              <Sparkles className="h-3.5 w-3.5" />
              Executive Launch Layer
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Final Executive Presentation Layer
            </h2>

            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-400">
              A premium executive showcase layer positioning the platform as an
              enterprise AI DevOps operating system with autonomous intelligence,
              operational governance, business value visibility, and
              white-label SaaS readiness.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3">
          <BadgeCheck className="h-5 w-5 text-emerald-300" />

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-emerald-200/70">
              Launch Posture
            </div>

            <div className="text-sm font-medium text-emerald-100">
              Executive presentation system ready
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
        {readinessMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:border-yellow-400/30 hover:bg-yellow-400/5"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-slate-400">{metric.label}</div>

                <div className="mt-4 text-4xl font-semibold text-white">
                  {metric.value}
                </div>
              </div>

              <div className="rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-2">
                <Gauge className="h-5 w-5 text-yellow-300" />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-yellow-300">
              <Trophy className="h-4 w-4" />
              Premium platform maturity signal
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-8 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
              <BrainCircuit className="h-5 w-5 text-cyan-300" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white">
                Executive Platform Narrative
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Final investor/demo positioning summary.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/50 p-6">
            <p className="text-sm leading-relaxed text-slate-300">
              This platform delivers an executive-grade AI DevOps architecture
              intelligence system that helps teams evaluate infrastructure
              posture, predict deployment risk, correlate incidents, optimize
              cost, assess compliance, understand multi-cloud operations, and
              trigger AI-guided command workflows from a single premium
              operating environment.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              The system is positioned for portfolio differentiation,
              enterprise demos, consulting conversations, monetization strategy,
              and future white-label SaaS packaging.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {platformHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium text-cyan-300"
                >
                  {highlight}
                </div>
              ))}
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300 transition-all duration-300 hover:bg-yellow-400/20">
              Open Executive Demo Mode
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Final Platform Signals
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Executive readiness indicators.
                </p>
              </div>

              <Rocket className="h-5 w-5 text-yellow-300" />
            </div>

            <div className="mt-6 space-y-4">
              {[
                { icon: CheckCircle2, label: "Enterprise UX foundation complete" },
                { icon: ShieldCheck, label: "Governance and compliance story strong" },
                { icon: Zap, label: "Autonomous AI systems visible" },
                { icon: BriefcaseBusiness, label: "Monetization narrative established" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="h-4 w-4 text-yellow-300" />

                    <span className="text-sm text-slate-300">
                      {item.label}
                    </span>
                  </div>

                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    Ready
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-yellow-500/10 via-cyan-500/10 to-purple-500/10 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3">
                <Sparkles className="h-5 w-5 text-cyan-300" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  Phase 7 Completion Signal
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  Ready for workspace architecture transition
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/40 p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                Core enterprise intelligence systems are now complete. The next
                strategic move is to transition from a single vertical dashboard
                into route-based executive workspaces that reduce scrolling,
                improve performance, and create a true SaaS operating-system
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}