import Link from "next/link";
import { ArrowRight, CalendarDays, HeartHandshake, Smartphone } from "lucide-react";
import ServiceCard from "../components/ServiceCard";
import ProfessionalCard from "../components/ProfessionalCard";
import FeatureCard from "../components/FeatureCard";

const services = [
  { title: "Manicure VIP", subtitle: "Unhas perfeitas + nail art", price: "R$ 120" },
  { title: "Pedicure Spa", subtitle: "Relaxamento e cuidado completo", price: "R$ 140" },
  { title: "Alongamento de Gel", subtitle: "Design elegante e duradouro", price: "R$ 220" }
];

const professionals = [
  { name: "Lívia Souza", role: "Especialista em nail art", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=4&w=400&h=400&q=80" },
  { name: "Marina Costa", role: "Designer de unhas", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=4&w=400&h=400&q=80" },
  { name: "Camila Reis", role: "Técnica em pedicure", avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=facearea&facepad=4&w=400&h=400&q=80" }
];

const features = [
  { icon: CalendarDays, title: "Calendário fácil", description: "Reserve horário em poucos toques.", accent: "Agendamento online" },
  { icon: Smartphone, title: "App web PWA", description: "Instale no celular e abra como app.", accent: "Experiência mobile" },
  { icon: HeartHandshake, title: "Atendimento premium", description: "Confirmação visual com estilo sofisticado.", accent: "Cliente + profissional" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/80 p-6 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6 pr-0 lg:pr-10">
            <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
              Agenda beleza com estilo
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Agende seu horário de manicure e salão como num app premium.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Experiência mobile-first, processo rápido e interface elegante para clientes e profissionais.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/register" className="inline-flex items-center justify-center rounded-3xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
                Começar agora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/admin" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-300/40 hover:bg-white/10">
                Painel de profissional
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/90 p-6 shadow-xl ring-1 ring-white/5 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-violet-500/30 to-transparent" />
            <div className="relative space-y-6">
              <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5 shadow-lg">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Próximo horário</span>
                  <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-300">Confirmado</span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="text-lg font-semibold text-white">Manicure VIP</div>
                  <div className="text-sm text-slate-400">Com Lívia Souza • 21 de maio • 14:00</div>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Serviços em destaque</p>
                  <p className="mt-4 text-sm text-slate-300">Nail art, design personalizado e aplicação premium.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Reserva rápida</p>
                  <p className="mt-4 text-sm text-slate-300">Veja horários disponíveis e confirme em minutos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} accent={feature.accent} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Serviços populares</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Escolha o tratamento ideal</h2>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} subtitle={service.subtitle} price={service.price} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Profissionais de confiança</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Conheça os especialistas</h2>
          </div>
          <Link href="/signin" className="text-sm font-semibold text-violet-300 transition hover:text-violet-200">
            Ver todos profissionais
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {professionals.map((pro) => (
            <ProfessionalCard key={pro.name} name={pro.name} role={pro.role} avatar={pro.avatar} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl rounded-[32px] border border-white/10 bg-slate-950/80 p-8 shadow-soft backdrop-blur-xl sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Acelere seu salão</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Experiência premium para clientes e profissionais.</h3>
            <p className="mt-3 max-w-2xl text-base text-slate-300">Transforme o agendamento em um fluxo visual, rápido e confiável com uma plataforma que parece um app real.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/register" className="inline-flex items-center justify-center rounded-3xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
              Entrar como cliente
            </Link>
            <Link href="/admin" className="inline-flex items-center justify-center rounded-3xl border border-violet-500/40 px-5 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/10">
              Acessar painel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
