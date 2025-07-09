"use client";

import Image from "next/image";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.postCard}>
        <Image
          src="/Hoobbit.png"
          alt="O Hoobbit"
          width={120}
          height={180}
          className={styles.bookImage}
        />
        <div className={styles.postContent}>
          <h2>O Hoobbit</h2>
          <p className={styles.author}>by J.R.R Tolkien</p>
          <p className={styles.meta}>Publicado em 1949 · Literatura fantástica</p>
          <p className={styles.description}>
            Uma jornada mágica e envolvente pela Terra-média. Estou relendo “O Hobbit” agora e ainda me encanto com o espírito aventureiro de Bilbo...
          </p>
          <p className={styles.signature}>• Jonas R.</p>
        </div>
      </div>

      <div className={styles.postCard}>
        <Image
          src="/1984.png"
          alt="1984"
          width={120}
          height={180}
          className={styles.bookImage}
        />
        <div className={styles.postContent}>
          <h2>1984</h2>
          <p className={styles.author}>by George Orwell</p>
          <p className={styles.meta}>Publicado em 1949 · Ficção distópica</p>
          <p className={styles.description}>
            Um alerta arrepiante e atemporal sobre o controle governamental. Estou lendo “1984” neste exato momento e não consigo deixar de me arrepiar...
          </p>
          <p className={styles.signature}>• Sarah M.</p>
        </div>
      </div>
    </main>
  );
}
