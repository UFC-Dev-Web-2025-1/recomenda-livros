"use client";

import React from 'react';
import '../globals.css';
import Header from '../../components/Layout/Header/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header title="Minha Estante" avatar="A" />
        {children}
      </body>
    </html>
  );
}
