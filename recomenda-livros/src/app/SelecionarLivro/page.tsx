'use client';

import React, { useState } from 'react';
import styles from './login.module.css';
import FormLivro from '@/src/components/Forms/FormLivro/FormLivro';
import Footer from '@/src/components/Layout/Footer/footer';

export default function SelecionarLivroPage() {
  return (
    <div className={styles.container}>
   
      <main className={styles.main}>
        <div className={styles.iconLivro} />
        <p className={styles.selecioneTexto}>Selecione o livro para sua Estante</p>
        <FormLivro />
      </main>

      <Footer />
    </div>
  );
}
