"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/src/components/Layout/Footer/footer";
import Header from "@/src/components/Layout/Header/Header";
import Sidebar from "@/src/components/Navigation/Slidebar";
import { Box } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function SelecionarLivroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (

    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>

      <html lang="pt-BR">
        <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            marginLeft: isSidebarVisible ? '' : '0px',
            transition: 'margin-left 0.3s ease-in-out',
            width: isSidebarVisible ? 'calc(100% - 250px)' : '100%',
          }}
        >
          <Header title="Selecionar Livro" avatar="A"  config={false} onMenuClick={handleMenuToggle} />
          <body className={inter.className}>
            <main className="main-content">{children}</main>
            <Footer />
          </body>
        </Box>
      </html>
    </Box>
  
  );
}