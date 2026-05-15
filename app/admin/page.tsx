"use client";

import { useState } from "react";
import { CalendarDays, FolderOpen, Users, Zap } from "lucide-react";
import AdminCard from "../../components/AdminCard";

const stats = [
  { title: "Agendamentos hoje", value: "18", icon: CalendarDays },
  { title: "Clientes ativos", value: "72", icon: Users },
  { title: "Serviços ativos", value: "12", icon: FolderOpen },
  { title: "Horários bloqueados", value: "5", icon: Zap }
];

export default function AdminPage() {
  const [currentView, setCurrentView] = useState("agenda");

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl sm:p-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Painel profissional</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Controle do salão</h1>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {['agenda', 'clientes', 'serviços'].map((view) => (
                <button
                  key={view}
                  onClick={() => setCurrentView(view)}
                  className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${currentView === view ? 'bg-violet-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
                >
                  {view === 'agenda' ? 'Agenda' : view === 'clientes' ? 'Clientes' : 'Serviços'}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <AdminCard key={stat.title} title={stat.title} value={stat.value} icon={stat.icon} />
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Calendário completo</h2>
                <p className="text-sm text-slate-400">Visualize horários confirmados, bloqueados e agendamentos próximos.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Segunda-feira</p>
                <p className="mt-4 text-xl font-semibold text-white">8 agendamentos</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Terça-feira</p>
                <p className="mt-4 text-xl font-semibold text-white">5 agendamentos</p>
              </div>
            </div>
          </div>
          <aside className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <h3 className="text-lg font-semibold text-white">Ações rápidas</h3>
              <div className="mt-4 space-y-3">
                <button className="w-full rounded-3xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">Cadastrar serviço</button>
                <button className="w-full rounded-3xl bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10">Adicionar profissional</button>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">WhatsApp</p>
              <p className="mt-3 text-sm text-slate-300">Atenda clientes rapidamente e confirme horários pelo app de mensagens.</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
