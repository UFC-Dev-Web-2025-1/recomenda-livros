"use client";

import React, { useState } from 'react';
import '../globals.css';
import Header from '../../components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Começa visível (desktop)

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <html lang="pt-BR">
      <body>
   
        {children}
      </body>
    </html>
  );
}
