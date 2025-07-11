'use client';

import React, { useState } from 'react';
import styles from './login.module.css';

export default function SelecionarLivroPage() {
  const [nomeLivro, setNomeLivro] = useState('');
  const [nomeAutor, setNomeAutor] = useState('');
  const [categoria, setCategoria] = useState('');
  const [quantidadeLida, setQuantidadeLida] = useState('');
  const [classificacao, setClassificacao] = useState('');

  return (
    <div className={styles.container}>
   

      <main className={styles.main}>
        <div className={styles.iconLivro} />
        <p className={styles.selecioneTexto}>Selecione o livro para sua Estante</p>

        <form className={styles.form}>
          <input
            className={styles.input}
            placeholder="Nome do Livro"
            value={nomeLivro}
            onChange={(e) => setNomeLivro(e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Nome do Autor"
            value={nomeAutor}
            onChange={(e) => setNomeAutor(e.target.value)}
          />
          <select
            className={styles.input}
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            aria-label="Categoria"
          >
            <option value="">Categoria</option>
            <option value="Literatura infantil">Literatura infantil</option>
            <option value="Ficção">Ficção</option>
            <option value="Biografia">Biografia</option>
          </select>

          <div className={styles.row}>
            <input
              className={styles.inputHalf}
              placeholder="Quantidade Lida: ex 98%"
              value={quantidadeLida}
              onChange={(e) => setQuantidadeLida(e.target.value)}
            />
            <select
              className={styles.inputHalf}
              value={classificacao}
              onChange={(e) => setClassificacao(e.target.value)}
              aria-label="Classificação"
            >
              <option value="">Classifique</option>
              <option value="Lido">Lido</option>
              <option value="Não Lido">Não Lido</option>
            </select>
          </div>

          <div className={styles.buttons}>
            <button type="button" className={styles.backButtonForm}>Voltar</button>
            <button type="submit" className={styles.selectButton}>Selecionar</button>
          </div>
        </form>
      </main>


    </div>
  );
}
