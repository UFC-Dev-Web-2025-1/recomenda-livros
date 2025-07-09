"use client";

import Image from "next/image";
import styles from "./sinopse.module.css";
import { FaShareAlt } from "react-icons/fa";

export default function BookDetails() {
  return (
    <main className={styles.container}>
      {/* Cabeçalho com botão de compartilhar */}
      <header className={styles.headerBar}>
        <h1 className={styles.headerTitle}>O Hobbit</h1>
        <button className={styles.shareButton}>
          <FaShareAlt className={styles.shareIcon} />
          Compartilhar
        </button>
      </header>

      <div className={styles.card}>
        <Image
          src="/Hoobbit.png"
          alt="Capa do livro O Hobbit"
          width={220}
          height={320}
          className={styles.bookCover}
        />

        <h2 className={styles.title}>O Hobbit</h2>
        <p className={styles.author}>J.R.R. Tolkien</p>

        <div className={styles.rating}>
          <span className={styles.stars}>★★★★★</span>
          <span className={styles.ratingValue}>4.7</span>
        </div>

        <nav className={styles.tabs}>
          <button className={`${styles.tab} ${styles.active}`}>SINOPSE</button>
          <button className={styles.tab}>RESENHAS</button>
        </nav>

        <p className={styles.synopsis}>
          Bilbo Bolseiro, um hobbit tranquilo, vê sua vida virar de cabeça para baixo quando Gandalf, o mago, e um
          grupo de anões aparecem em sua porta para uma aventura repleta de dragões, tesouros e perigos.
        </p>
      </div>
    </main>
  );
}
