import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel Terrenos QA",
  description: "Funil gamificado premium para simular ganhos e intenção de compra."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
