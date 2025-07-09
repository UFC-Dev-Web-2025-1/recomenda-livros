// layout.tsx
"use client";

import React from 'react';
import '../globals.css';
import Header from '../../components/Layout/Header/Header';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header title="Buscar Livro" avatar="A" />
        <main>{children}</main>
      </body>
    </html>
  );
}
