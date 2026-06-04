import { Handle, Position } from "reactflow";

type Props = {
  data: {
    label: string;
    provider?: string;
    description?: string;
    type?: string;
  };
};

const nodeStyles: Record<string, string> = {
  frontend: "border-cyan-400 bg-cyan-500/10",
  backend: "border-emerald-400 bg-emerald-500/10",
  database: "border-orange-400 bg-orange-500/10",
  cloud: "border-yellow-400 bg-yellow-500/10",
  container: "border-pink-400 bg-pink-500/10",
  cicd: "border-purple-400 bg-purple-500/10",
  security: "border-red-400 bg-red-500/10",
  monitoring: "border-blue-400 bg-blue-500/10",
};

export default function InfrastructureNode({ data }: Props) {
  const style =
    nodeStyles[data.type || "cloud"] || "border-slate-400 bg-slate-500/10";

  return (
    <div className="relative">
      <Handle
        type="target"
        position={Position.Left}
        id="target"
        className="!h-3 !w-3 !border !border-cyan-300 !bg-slate-950"
      />

      <div
        className={`min-w-[220px] rounded-2xl border ${style} px-4 py-4 shadow-2xl backdrop-blur-sm`}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-white">{data.label}</p>

          <div className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] text-slate-300">
            {data.provider || "Infrastructure"}
          </div>
        </div>

        <div className="mt-3 h-px bg-white/10" />

        <p className="mt-3 text-xs leading-relaxed text-slate-300">
          {data.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="rounded-full bg-black/20 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-400">
            {data.type}
          </div>

          <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="source"
        className="!h-3 !w-3 !border !border-cyan-300 !bg-cyan-400"
      />
    </div>
  );
}