'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './login.module.css';
import FormLivro from '@/src/components/Forms/FormLivro/FormLivro';
import Footer from '@/src/components/Layout/Footer/footer';

// Interface para tipar os dados do Strapi
interface Livro {
  id: number;
  attributes: {
    titulo: string;
    // Adicione outras propriedades conforme necessário
  };
}

export default function SelecionarLivroPage() {
  // Estados para livros, carregamento e erro
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Requisição para buscar livros ao carregar a página
  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/livros');
        setLivros(response.data.data); // Strapi retorna dados em response.data.data
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar livros:', err);
        setError('Falha ao carregar os livros. Tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchLivros();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.iconLivro} />
        <p className={styles.selecioneTexto}>Selecione o livro para sua Estante</p>

        {/* Renderização condicional dos livros */}
        {loading ? (
          <p className={styles.loading}>Carregando livros...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : livros.length === 0 ? (
          <p className={styles.empty}>Nenhum livro encontrado.</p>
        ) : (
          <ul className={styles.livrosLista}>
            {livros.map((livro) => (
              <li key={livro.id} className={styles.livroItem}>
                {livro.attributes?.titulo || 'Título não disponível'}
              </li>
            ))}
          </ul>
        )}

        <FormLivro />
      </main>

      <Footer />
    </div>
  );
}