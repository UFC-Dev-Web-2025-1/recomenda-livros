import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
            <h1 className="navbar-title">Recomenda Livros</h1>
            <span className="navbar-divider" />
            <Image
              src="/Education.png"
              alt="Logo Recomenda Livros"
              width={40}
              height={40}
              className="navbar-logo"
              priority
            />
          </div>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
