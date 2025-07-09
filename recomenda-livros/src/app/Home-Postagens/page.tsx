"use client";

import BookPostCard from '@/src/components/Cards/PostagemCard/BookPostCard';
import React from 'react';
import Footer from '@/src/components/Layout/Footer/footer';
import Header from '@/src/components/Layout/Header/Header';
import styles from './Home.module.css'; 
export default function HomePostagensPage() {
  // Dados simulados para as postagens
  const posts = [
    {
      id: '1',
      title: 'O Hoobbit',
      author: 'J.R.R Tolkien',
      genre: 'Literatura fantástica',
      publishedYear: 1949,
      description: 'Uma jornada mágica e envolvente pela Terra-Média. Estou relendo "O Hobbit" agora e ainda me encanto com o espírito aventureiro de Bilbo, que sai de seu confortável lar para enfrentar trolls, elfos e o terrível Smaug. Cada capítulo é repleto de humor sutil e descritivo que me transportam para montanhas nevadas e florestas mágicas. Não tem como não sorrir as aventuras dos anões e se emocionar com a coragem improvável de um hobbit. Adoro como Tolkien mistura fantasia épica e amizade verdadeira; simplesmente não consigo largar este livro!',
      postAuthor: 'Jonas R.',
      coverSrc: '/hobbit.png', 
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      genre: 'Ficção distópica',
      publishedYear: 1949,
      description: 'Um alerta arrepiante e atemporal sobre o controle governamental. Estou lendo "1984" neste exato momento e não consigo deixar de me arrepiar a cada página - a forma como Orwell descreve a vigilância constante me deixou de queixo caído. Já nas primeiras páginas, percebi o quão perturbadora é a capacidade do Estado de manipular a verdade e de moldar pensamentos. Sem dúvida, estou gostando muito da profundidade dos personagens e da tensão crescente; é um livro que prende e faz questionar até onde poderíamos permitir que nosso próprio governo vá.',
      postAuthor: 'Sarah M.',
      coverSrc: '/1984.png', 
    },
  ];

  return (
    <div className={styles.homeContainer}>
      {/* <Sidebar /> */}
      <div className={styles.contentWrapper}>
        <main className={styles.mainContent}>
          {posts.map(post => (
            <BookPostCard key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}