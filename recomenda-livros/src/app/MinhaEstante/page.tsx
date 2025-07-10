"use client";

import React, { useState } from 'react';
import styles from './estante.module.css';
import Image from 'next/image';
import BookCard from '@/src/components/Cards/BookCard/BookCard';
import Footer from '@/src/components/Layout/Footer/footer';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Header from '@/src/components/Layout/Header/Header';
import { Box } from '@mui/material';

export default function Page() {
  const myBook = {
    id: '1',
    title: 'A Hora é da Estrela',
    author: 'Clarice Lispector',
    coverSrc: '/clarice-book.png',
    rating: 4.5,
    completionPercentage: 100,
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
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
        <Header title="Minha Estante" avatar="A" onMenuClick={handleMenuToggle} />
        <div className={styles.container}>
          <div className={styles.icones}>
            <Image src="/livros.png" alt="Livros" width={90} height={90} />
          </div>

          <div className={styles.grid}>
            <BookCard book={myBook} />

            <BookCard book={{ ...myBook, id: '2', title: 'Outro Livro', author: 'Outro Autor', rating: 3.0, completionPercentage: 50, coverSrc: '/another-book-cover.png' }} />
            <BookCard book={myBook} />
            <BookCard book={myBook} />
            <BookCard book={myBook} />
            <BookCard book={myBook} />

          </div>

          <Footer />
        </div>
      </Box>
    </Box>

  );
}
