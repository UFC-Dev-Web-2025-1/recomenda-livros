// layout.tsx
import './globals.css';

export const metadata = {
  title: 'Selecionar Livro',
  description: 'Adicione livros à sua estante',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
