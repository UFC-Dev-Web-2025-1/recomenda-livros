// app/selecionar-livro/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Selecionar Livro",
  description: "Adicione livros à sua estante",
};

export default function SelecionarLivroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}