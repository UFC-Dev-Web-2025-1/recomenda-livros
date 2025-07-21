'use client';

import React, { useState } from 'react';
import styles from './livro.module.css';
import FormLivro from '@/src/components/Forms/FormLivro/FormLivro';
import Footer from '@/src/components/Layout/Footer/footer';

export default function AtualizarLivroPage() {
  const [nomeLivro, setNomeLivro] = useState('O Pequeno Principe');
  const [nomeAutor, setNomeAutor] = useState('Antoine de Saint-Exupéry');
  const [categoria, setCategoria] = useState('Literatura infantil');
  const [quantidadeLida, setQuantidadeLida] = useState('');
  const [classificacao, setClassificacao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log({
      nomeLivro,
      nomeAutor,
      categoria,
      quantidadeLida,
      classificacao,
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.iconLivro} />
        <p className={styles.selecioneTexto}>Atualizando Livro da sua Estante</p>
        <FormLivro />
      </main>
      <Footer />
    </div>
  );
}
