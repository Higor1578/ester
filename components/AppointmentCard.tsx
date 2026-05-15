import type { FC } from "react";

interface AppointmentCardProps {
  appointment: {
    service: string;
    professional: string;
    time: string;
    status: string;
  };
}

const AppointmentCard: FC<AppointmentCardProps> = ({ appointment }) => (
  <div className="rounded-[28px] border border-white/10 bg-slate-950/90 p-5 shadow-lg transition hover:border-violet-500/30">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm text-slate-400">{appointment.service}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{appointment.professional}</h3>
      </div>
      <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">{appointment.status}</span>
    </div>
    <p className="mt-4 text-sm text-slate-400">{appointment.time}</p>
    <div className="mt-5 flex gap-3">
      <button className="flex-1 rounded-3xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">Detalhes</button>
      <button className="rounded-3xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">Confirmar</button>
    </div>
  </div>
);

export default AppointmentCard;
