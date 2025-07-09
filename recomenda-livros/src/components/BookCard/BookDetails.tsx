"use client";
import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import BookRating from './BookRating';

interface BookDetailsProps {
  title: string;
  author: string;
  rating: number;
  percentage: number;
}

export default function BookDetails({ title, author, rating, percentage }: BookDetailsProps) {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}> 
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#212121', fontSize: { xs: '1rem', sm: '1.15rem' } }}>
        {title} 
      </Typography>
      <Typography variant="body1" sx={{ color: '#757575', mb: 1, fontSize: { xs: '0.85rem', sm: '0.95rem' } }}>
        {author} 
      </Typography>
      <BookRating rating={rating} /> 
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={1} 
        alignItems={{ xs: 'flex-start', sm: 'center' }} 
        sx={{ mt: 2 }} 
      >
        <Stack direction="row" spacing={1} flexGrow={1}>
          <Button
            variant="contained" 
            sx={{
              backgroundColor: '#2E82DB', 
              borderRadius: '20px', 
              textTransform: 'none', 
              px: 2, 
              py: 0.5, 
              minWidth: 'unset', 
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Lido
          </Button>
          <Button
            variant="outlined" 
            sx={{
              color: '#FFFFFF', 
              backgroundColor: '#0057B8', 
              '&:hover': {
                borderColor: '#1565c0',
                color: '#1565c0',
              },
              borderRadius: '20px', 
              textTransform: 'none', 
              px: 2, 
              py: 0.5, 
              minWidth: 'unset', 
              fontSize: { xs: '0.75rem', sm: '0.875rem' }
            }}
          >
            Editar
          </Button>
        </Stack>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#212121', ml: { xs: 0, sm: 2 } }}>
          {percentage} % 
        </Typography>
      </Stack>
    </Box>
  );
}