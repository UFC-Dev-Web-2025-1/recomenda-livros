"use client";

import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Card: O Hobbit */}
      <article className={styles.postCard}>
        <Image
          src="/Hoobbit.png"
          alt="Capa do livro O Hobbit"
          width={140}
          height={200}
          className={styles.bookImage}
        />
        <div className={styles.postContent}>
          <h2 className={styles.title}>O Hobbit</h2>
          <p className={styles.author}>por <strong>J.R.R. Tolkien</strong></p>
          <p className={styles.meta}>Publicado em 1937 · Literatura Fantástica</p>
          <p className={styles.description}>
            Uma jornada épica pela Terra-média que continua a encantar leitores de todas as idades. Revisitar
            “O Hobbit” é se aventurar junto de Bilbo Bolseiro em sua missão improvável, enfrentando trolls,
            dragões e florestas antigas. Tolkien cria um universo mágico onde a amizade e a coragem
            de um hobbit comum se tornam extraordinárias.
          </p>
          <p className={styles.signature}>— Jonas R.</p>
        </div>
      </article>

      {/* Card: 1984 */}
      <article className={styles.postCard}>
        <Image
          src="/1984.png"
          alt="Capa do livro 1984"
          width={140}
          height={200}
          className={styles.bookImage}
        />
        <div className={styles.postContent}>
          <h2 className={styles.title}>1984</h2>
          <p className={styles.author}>por <strong>George Orwell</strong></p>
          <p className={styles.meta}>Publicado em 1949 · Ficção Distópica</p>
          <p className={styles.description}>
            Uma distopia assustadoramente atual que explora o totalitarismo e a vigilância extrema. A cada
            página, Orwell mostra como o Estado pode manipular a verdade e moldar a mente humana.
            “1984” não é apenas um livro, mas um alerta permanente sobre a fragilidade da liberdade.
          </p>
          <p className={styles.signature}>— Sarah M.</p>
        </div>
      </article>
    </main>
  );
}
