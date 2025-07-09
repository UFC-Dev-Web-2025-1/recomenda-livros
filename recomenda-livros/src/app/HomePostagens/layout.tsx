"use client";

import "./globals.css";
import styles from "./Home.module.css";
import Header from '../../components/Layout/Header/Header';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={styles.body}>
        <Header title="Buscar Livro..." avatar="A" />
        {children}
        <footer className={styles.footer}>
          <div className={styles.footerItem}>
            <span className={styles.forumBadge}>32</span>
            Fóruns
          </div>
          <div className={styles.footerItem}>
            Recomendações
          </div>
        </footer>
      </body>
    </html>
  );
}
