import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ester Beauty — Agendamento premium",
  description: "App SaaS de agendamento mobile-first para manicure e salão de beleza.",
  icons: {
    icon: "/icon.svg"
  },
  manifest: "/manifest.json",
  themeColor: "#020617"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
