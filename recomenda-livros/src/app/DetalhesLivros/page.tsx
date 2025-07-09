"use client";

import Image from "next/image";
import { FaShareAlt } from "react-icons/fa";
import styles from "./sinopse.module.css";

export default function BookDetails() {
  return (
    <main className={styles.container}>
      <header className={styles.headerBar}>
        <h1 className={styles.headerTitle}>O Hobbit</h1>
        <div className={styles.headerActions}>
          <button
            className={styles.shareButton}
            title="Compartilhar"
            aria-label="Compartilhar"
          >
            <FaShareAlt />
          </button>
          <div className={styles.avatar}>A</div>
        </div>
      </header>

      <Image
        src="/Hoobbit.png"
        alt="Capa do livro O Hobbit"
        width={200}
        height={300}
        className={styles.bookCover}
      />

      <h2 className={styles.title}>O Hobbit</h2>
      <p className={styles.author}>J.R.R. Tolkien</p>

      <div className={styles.rating}>
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.ratingValue}>4.7</span>
      </div>

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${styles.active}`}>SINOPSE</button>
        <button className={styles.tab}>RESENHAS</button>
      </div>

      <p className={styles.synopsis}>
        Bilbo Bolseiro, um hobbit tranquilo, vê sua vida virar de cabeça para baixo quando Gandalf, o mago,
        e um grupo de anões aparecem em sua porta para uma aventura repleta de dragões, tesouros e perigos.
      </p>
    </main>
  );
}
