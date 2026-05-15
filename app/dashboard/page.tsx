"use client";

import { useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, ClipboardList, UserCircle2 } from "lucide-react";
import AppointmentCard from "../../components/AppointmentCard";

const appointments = [
  { service: "Manicure VIP", professional: "Lívia Souza", time: "21 de mai • 14:00", status: "Confirmado" },
  { service: "Pedicure Spa", professional: "Marina Costa", time: "22 de mai • 11:30", status: "Pendente" },
  { service: "Alongamento de Gel", professional: "Camila Reis", time: "24 de mai • 16:00", status: "Confirmado" }
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("agenda");
  const summary = useMemo(
    () => ({
      total: appointments.length,
      upcoming: appointments.filter((item) => item.status === "Confirmado").length,
      pending: appointments.filter((item) => item.status === "Pendente").length
    }),
    []
  );

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Bem-vindo de volta</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Seus agendamentos</h1>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-3 text-sm text-slate-300">Área do cliente</div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center gap-3 text-violet-300"><ClipboardList className="h-5 w-5" /> Total de reservas</div>
              <div className="mt-5 text-4xl font-semibold text-white">{summary.total}</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center gap-3 text-emerald-300"><CheckCircle2 className="h-5 w-5" /> Confirmados</div>
              <div className="mt-5 text-4xl font-semibold text-white">{summary.upcoming}</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <div className="flex items-center gap-3 text-amber-300"><CalendarDays className="h-5 w-5" /> Aguardando</div>
              <div className="mt-5 text-4xl font-semibold text-white">{summary.pending}</div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Meus agendamentos</h2>
                <p className="text-sm text-slate-400">Confirme, cancele ou veja detalhes de cada horário.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 px-4 py-2 text-sm text-slate-300">Atualizado agora</div>
            </div>
            <div className="space-y-4">
              {appointments.map((item) => (
                <AppointmentCard key={item.time} appointment={item} />
              ))}
            </div>
          </div>
          <aside className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
            <div className="space-y-3 rounded-3xl bg-slate-950/80 p-5">
              <div className="flex items-center gap-3 text-violet-300"><UserCircle2 className="h-5 w-5" /> Perfil rápido</div>
              <p className="text-sm text-slate-400">Acompanhe seus próximos horários, histórico e o contato do salão.</p>
            </div>
            <div className="space-y-3 rounded-3xl bg-slate-950/80 p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm uppercase tracking-[0.3em] text-slate-400">WhatsApp</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">Disponível</span>
              </div>
              <p className="text-sm text-slate-300">Entre em contato direto com o salão e confirme detalhes do seu serviço.</p>
              <button className="w-full rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Abrir WhatsApp
              </button>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
