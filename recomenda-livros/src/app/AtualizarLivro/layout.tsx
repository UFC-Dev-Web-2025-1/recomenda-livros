"use client";

import { Box } from '@mui/material';
import './globals.css';
import { ReactNode, useState } from 'react';
import Header from '@/src/components/Layout/Header/Header';
import Footer from '@/src/components/Layout/Footer/footer';
import Sidebar from '@/src/components/Navigation/Slidebar';



export default function RootLayout({ children }: { children: ReactNode }) {

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />

      <html lang="pt-BR">
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
          <Header title="Atualizar Livro" avatar="A" config={false} onMenuClick={handleMenuToggle} />
          <body>
            {children}
            <Footer />
          </body>
        </Box>
      </html>
    </Box>

  );
}
