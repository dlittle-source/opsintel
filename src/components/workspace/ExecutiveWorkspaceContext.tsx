import {
  ChevronRight,
  Layers3,
  Sparkles,
} from "lucide-react";

type Props = {
  workspace: string;
  category: string;
  description: string;
};

export default function ExecutiveWorkspaceContext({
  workspace,
  category,
  description,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-5 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.10),transparent_35%)]" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="flex items-center gap-1">
            <Layers3 className="h-3.5 w-3.5" />
            Executive Operations Platform
          </span>

          <ChevronRight className="h-3.5 w-3.5" />

          <span className="text-cyan-300">
            {workspace}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1">
            <span className="text-xs font-medium text-cyan-200">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            <span className="text-xs font-medium text-emerald-200">
              Executive Workspace
            </span>
          </div>
        </div>

        <p className="mt-4 max-w-3xl text-sm text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}