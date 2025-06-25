import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recomenda Livros",
  description: "Sistema profissional de recomendação de livros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <header className="navbar">
          <div className="navbar-content full-width">
            <Image
              src="/Education.png"
              alt="Logo Recomenda Livros"
              width={40}
              height={40}
              className="navbar-logo"
              priority
            />
            <span className="navbar-divider" />
            <h1 className="navbar-title">Recomenda Livros</h1>
          </div>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
