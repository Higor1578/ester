import type { ComponentType, FC, SVGProps } from "react";

interface FeatureCardProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  accent: string;
}

const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, description, accent }) => (
  <div className="rounded-[32px] border border-white/10 bg-slate-950/90 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm text-slate-400">{description}</p>
    <div className="mt-6 inline-flex rounded-full bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">{accent}</div>
  </div>
);

export default FeatureCard;
