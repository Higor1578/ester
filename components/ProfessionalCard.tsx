import type { FC } from "react";

interface ProfessionalCardProps {
  name: string;
  role: string;
  avatar: string;
}

const ProfessionalCard: FC<ProfessionalCardProps> = ({ name, role, avatar }) => (
  <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-violet-500/30">
    <div className="flex items-center gap-4">
      <img src={avatar} alt={name} className="h-14 w-14 rounded-3xl object-cover ring-1 ring-white/10" />
      <div>
        <p className="text-lg font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </div>
    <div className="mt-5 rounded-3xl bg-white/5 p-4 text-sm text-slate-300">Pronta para atender com agendamentos rápidos e serviço personalizado.</div>
  </div>
);

export default ProfessionalCard;
