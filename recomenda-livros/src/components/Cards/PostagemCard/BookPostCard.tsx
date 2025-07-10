// src/components/PostagemCard/BookPostCard.tsx
"use client";

import React from 'react';
import { Paper, Box, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface BookPostCardProps {
  post: {
    id: string;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
    description: string;
    postAuthor: string;
    coverSrc: string;
  };
}

export default function BookPostCard({ post }: BookPostCardProps) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        borderRadius: '12px',
        overflow: 'hidden',
        maxWidth: { xs: '90%', sm: '800px' }, 
        width: '100%',
        p: { xs: 1.5, sm: 2.5 },
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        flexDirection: { xs: 'column', sm: 'row' }, 
        gap: { xs: 1.5, sm: 2.5 },
      }}
    >
      <Box sx={{ flexShrink: 0, width: { xs: '120px', sm: '150px' }, height: { xs: '180px', sm: '225px' }, mx: { xs: 'auto', sm: 0 } }}>
        <Image
          src={post.coverSrc}
          alt={post.title}
          width={150}
          height={225}
          style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '8px' }}
          priority
        />
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#212121', fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
            {post.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#757575', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            by {post.author}
          </Typography>
          <Typography variant="body2" sx={{ color: '#9E9E9E', fontSize: { xs: '0.8rem', sm: '0.9rem' }, mt: 0.5 }}>
            Publicado em {post.publishedYear} - {post.genre}
          </Typography>
          <Typography variant="body2" sx={{ color: '#424242', mt: 1.5, lineHeight: 1.6, fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
            {post.description}
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'right', mt: 2 }}>
          <Typography variant="caption" sx={{ color: '#616161', fontStyle: 'italic', fontSize: { xs: '0.75rem', sm: '0.8rem' } }}>
            - {post.postAuthor}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}