import "./globals.css";

export const metadata = {
  title: "Detalhes do Livro - O Hobbit",
  description: "Página de sinopse do livro O Hobbit",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
