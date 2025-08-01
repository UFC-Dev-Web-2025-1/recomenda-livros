"use client";

import React, { useState, useEffect } from 'react';
import styles from './estante.module.css';
import Image from 'next/image';
import BookCard from '@/src/components/Cards/BookCard/BookCard';
import Footer from '@/src/components/Layout/Footer/footer';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Header from '@/src/components/Layout/Header/Header';
import { Box } from '@mui/material';

interface Book {
  id: string;
  title: string;
  author: string;
  coverSrc: string;
  rating: number;
  completionPercentage: number;
}

export default function Page() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const res = await fetch('http://localhost:3001/books');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data: Book[] = await res.json();
        setBooks(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

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
        <Header title="Minha Estante" avatar="A" config={true} onMenuClick={handleMenuToggle} />

        <div className={styles.container}>
          <div className={styles.icones}>
            <Image src="/livros.png" alt="Livros" width={90} height={90} />
          </div>

          {loading && <p>Carregando livros…</p>}
          {error && <p>Erro ao carregar: {error}</p>}

          <div className={styles.grid}>
            {!loading && !error && books.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          <Footer />
        </div>
      </Box>
    </Box>
  );
}
