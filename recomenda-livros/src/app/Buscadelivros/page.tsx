// src/app/page.tsx
"use client";

import React from 'react';
import Header from '../../components/Layout/Header';
import styles from './page.module.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header title="" avatar="A" />

      <div className={styles.filterBar}>
        <Button
          variant="contained"
          startIcon={<MenuIcon />}
          className={styles.filterButton}
        >
          FILTROS
        </Button>
        <span className={styles.noFilterText}>Nenhum filtro aplicado</span>
      </div>

      <div className={styles.contentArea}>
        {/* Espaço para cards dos livros */}
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerItem}>
          <span className={styles.forumBadge}>32</span>
          Fóruns
        </div>
        <div className={styles.footerItem}>
          Recomendações
        </div>
      </footer>
    </div>
  );
}