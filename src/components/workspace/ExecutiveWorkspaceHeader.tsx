"use client";

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Props = {
  title: string;
  description: string;
  badge?: string;
};

export default function ExecutiveWorkspaceHeader({
  title,
  description,
  badge = "Enterprise Workspace",
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 shadow-[0_0_60px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />

      <div className="relative z-10 flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex items-start gap-4">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4 shadow-lg shadow-cyan-950/30">
            <BrainCircuit className="h-7 w-7 text-cyan-300" />
          </div>

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </div>

            <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {title}
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                Executive Visibility
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                AI-Governed Operations
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                Enterprise Ready
              </span>
            </div>
          </div>
        </div>

        <div className="w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 shadow-lg shadow-emerald-950/20 xl:w-auto">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-300" />

            <span className="text-sm font-medium text-emerald-100">
              Workspace Active
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-xs text-emerald-200/70">
            <ShieldCheck className="h-3.5 w-3.5" />
            Executive control layer online
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 flex flex-wrap gap-3">
        <button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-950/30">
          Open Executive Brief
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}