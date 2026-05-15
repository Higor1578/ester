"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md rounded-[32px] border border-white/10 bg-slate-900/90 p-8 shadow-soft backdrop-blur-xl">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Login</p>
          <h1 className="text-3xl font-semibold text-white">Acesse sua conta</h1>
          <p className="text-sm leading-6 text-slate-400">Use seu e-mail para entrar e continuar agendando com facilidade.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(event) => { event.preventDefault(); handleSignIn(); }}>
          <label className="block text-sm text-slate-200">
            <span className="mb-2 inline-flex items-center gap-2 text-slate-300"><Mail className="h-4 w-4" /> E-mail</span>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <label className="block text-sm text-slate-200">
            <span className="mb-2 inline-flex items-center gap-2 text-slate-300"><Lock className="h-4 w-4" /> Senha</span>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-slate-100 shadow-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          {message ? <p className="text-sm text-rose-300">{message}</p> : null}
          <button type="submit" disabled={loading} className="inline-flex w-full items-center justify-center rounded-3xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-70">
            {loading ? "Entrando..." : "Entrar"} <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-400">
          Novo por aqui?{' '}
          <Link href="/register" className="font-semibold text-violet-300 hover:text-violet-200">
            Criar conta
          </Link>
        </p>
      </div>
    </main>
  );
}
