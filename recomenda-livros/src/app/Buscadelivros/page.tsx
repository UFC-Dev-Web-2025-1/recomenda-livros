"use client";

import React, { useState } from 'react';
import Header from '../../components/Layout/Header/Header'; 

import styles from './page.module.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function HomePage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); 
    const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className={styles.container}>
      <Header title="Busca de Livro" avatar="A" config={true}  onMenuClick={handleMenuToggle}/>

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