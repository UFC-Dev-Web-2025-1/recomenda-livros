// src/components/BookCard/BookCard.tsx
"use client";
import React from 'react';
import { Paper, Box } from '@mui/material';
import BookCover from './BookCover';
import BookDetails from './BookDetails';

// Interface para definir a estrutura dos dados do livro
interface Book {
  id: string;
  title: string;
  author: string;
  coverSrc: string;
  rating: number;
  completionPercentage: number;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Paper
      elevation={3} // Adiciona uma sombra sutil ao card
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px', // Bordas arredondadas para o card
        overflow: 'hidden', // Garante que o conteúdo interno respeite as bordas arredondadas
        maxWidth: { xs: '90%', sm: '600px' }, // Largura máxima responsiva para o card
        margin: 'auto', // Centraliza o card na página
        p: { xs: 1, sm: 2 }, // Padding interno responsivo
        backgroundColor: '#FFFFFF', // Cor de fundo branca para o card
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', // Sombra personalizada para corresponder à imagem
        flexDirection: { xs: 'column', sm: 'row' }, // Empilha verticalmente em telas pequenas, horizontalmente em telas maiores para responsividade
        gap: { xs: 1, sm: 2 }, // Espaçamento entre a capa e os detalhes
      }}
    >
      <BookCover src={book.coverSrc} alt={book.title} />
      <BookDetails
        title={book.title}
        author={book.author}
        rating={book.rating}
        percentage={book.completionPercentage}
      />
    </Paper>
  );
}