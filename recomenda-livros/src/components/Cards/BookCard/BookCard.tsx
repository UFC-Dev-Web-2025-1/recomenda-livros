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
      elevation={3} 
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '12px', 
        overflow: 'hidden', 
        maxWidth: { xs: '90%', sm: '600px' }, 
        margin: 'auto',
        p: { xs: 1, sm: 2 },
        backgroundColor: '#FFFFFF', 
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', 
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 1, sm: 2 }, 
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