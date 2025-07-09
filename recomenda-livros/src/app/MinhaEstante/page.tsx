"use client";

import React from 'react';
import styles from './estante.module.css';
import Image from 'next/image';
import BookCard from '@/src/components/BookCard/BookCard';
import Footer from '@/src/components/Layout/Footer/footer';

export default function Page() {
  const myBook = {
    id: '1',
    title: 'A Hora é da Estrela',
    author: 'Clarice Lispector',
    coverSrc: '/clarice-book.png',
    rating: 4.5,
    completionPercentage: 100,
  };


  return (
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
  );
}
