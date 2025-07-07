"use client";

import React, { useState } from 'react';
import styles from './Filtros.module.css';

export default function Page() {
  const [showFiltros, setShowFiltros] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.filtrosHeader}>
        <button className={styles.filtrosBtn} onClick={() => setShowFiltros(!showFiltros)}>
          ☰ FILTROS
        </button>
        <span className={styles.filtrosStatus}>
          {showFiltros ? 'Filtros abertos' : 'Nenhum filtro aplicado'}
        </span>
      </div>

      {showFiltros && (
        <div className={styles.filtrosPainel}>
          <div className={styles.generos}>
            {['ROMANCE', 'FICÇÃO CIENTÍFICA', 'FANTASIA', 'MISTÉRIO', 'BIOGRAFIA', 'HORROR', 'DISTOPIA', 'LITERATURA CLÁSSICA'].map(genero => (
              <button key={genero} className={styles.generoBtn}>{genero}</button>
            ))}
          </div>

          <div>
            <p>Nota mínima</p>
            <p>☆☆☆☆☆</p>
          </div>

          <div>
            <p>Ano de publicação</p>
            <label>De:</label>
            <select>
              <option value="">Selecione</option>
            </select>
            <label>Até:</label>
            <select>
              <option value="">Selecione</option>
            </select>
          </div>

          <div className={styles.filtrosRodape}>
            <button className={styles.btnLimpar}>Limpar</button>
            <button className={styles.btnAplicar}>Aplicar</button>
          </div>
        </div>
      )}

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
