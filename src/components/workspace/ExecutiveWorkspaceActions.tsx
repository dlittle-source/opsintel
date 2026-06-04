import {
  Bot,
  Download,
  FileText,
  Share2,
} from "lucide-react";

type Props = {
  workspace: string;
};

const actions = [
  {
    label: "Generate Report",
    description: "Create executive summary",
    icon: FileText,
  },
  {
    label: "Export Analysis",
    description: "Download workspace insights",
    icon: Download,
  },
  {
    label: "Share Workspace",
    description: "Send operational view",
    icon: Share2,
  },
  {
    label: "Launch AI Review",
    description: "Run advisory analysis",
    icon: Bot,
  },
];

export default function ExecutiveWorkspaceActions({ workspace }: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-950/70 p-4 shadow-[0_0_40px_rgba(0,0,0,0.25)] backdrop-blur-xl">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-white">
            Executive Actions
          </p>
          <p className="text-xs text-slate-400">
            Operational controls for the {workspace} workspace.
          </p>
        </div>

        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
          Action Layer Active
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              type="button"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:shadow-[0_0_24px_rgba(34,211,238,0.10)]"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-slate-400 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:text-cyan-200">
                  <Icon className="h-4 w-4" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-200 group-hover:text-white">
                    {action.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {action.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}