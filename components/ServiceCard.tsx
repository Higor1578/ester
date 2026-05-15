import type { FC } from "react";

interface ServiceCardProps {
  title: string;
  subtitle: string;
  price: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ title, subtitle, price }) => (
  <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-6 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
    <div className="text-sm uppercase tracking-[0.3em] text-violet-300">Serviço</div>
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-400">{subtitle}</p>
    <div className="mt-6 flex items-center justify-between text-white">
      <span className="text-2xl font-semibold">{price}</span>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">Agendar</span>
    </div>
  </div>
);

export default ServiceCard;
