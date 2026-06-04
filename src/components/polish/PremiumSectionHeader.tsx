type Props = {
  eyebrow: string;
  title: string;
  description: string;
  badge?: string;
};

export default function PremiumSectionHeader({
  eyebrow,
  title,
  description,
  badge,
}: Props) {
  return (
    <div className="mb-5 flex flex-col gap-4 rounded-3xl border border-slate-800/70 bg-slate-950/60 p-5 shadow-lg lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
          {title}
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          {description}
        </p>
      </div>

      {badge && (
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-200">
          {badge}
        </div>
      )}
    </div>
  );
}