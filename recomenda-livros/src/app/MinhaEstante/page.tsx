"use client";

import React from 'react';
import styles from './estante.module.css';
import Image from 'next/image';

export default function Page() {
  const livros = Array(6).fill({
    titulo: 'A Hora é da Estrela',
    autor: 'Clarice Lispector',
    nota: 4.5,
    progresso: '100%',
  });

  return (
    <div className={styles.container}>
      <div className={styles.icones}>
        <Image src="/livros.png" alt="Livros" width={50} height={50} />
      </div>

      <div className={styles.grid}>
        {livros.map((livro, index) => (
          <div key={index} className={styles.livroCard}>
            <Image
              src="/Clarice.png"
              alt={livro.titulo}
              width={80}
              height={120}
              className={styles.livroImage}
            />
            <div className={styles.livroInfo}>
              <p className={styles.livroTitulo}>{livro.titulo}</p>
              <p className={styles.livroAutor}>{livro.autor}</p>
              <div className={styles.livroRating}>
                {'⭐'.repeat(5)}
                {livro.nota}
              </div>
              <div className={styles.livroAcoes}>
                <button className={styles.btnLido}>Lido</button>
                <button className={styles.btnEditar}>Editar</button>
              </div>
            </div>
            <span className={styles.livroProgresso}>{livro.progresso}</span>
          </div>
        ))}
      </div>

      <button className={styles.addBtn}>+</button>

      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <span className={styles.forumBadge}>32</span>
          Fóruns
        </div>
        <div className={styles.footerItem}>Recomendações</div>
      </footer>
    </div>
  );
}
