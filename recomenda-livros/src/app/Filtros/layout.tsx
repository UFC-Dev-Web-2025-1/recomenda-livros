
"use client";

import React, { useState } from 'react';
import '../globals.css';
import Header from '../../components/Layout/Header/Header';


export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Começa visível (desktop)

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <html lang="pt-BR">
      <body>
        <Header title="Buscar Livro" avatar="A" config={true}  onMenuClick={handleMenuToggle}/>
        <main>{children}</main>
      </body>
    </html>
  );
}
