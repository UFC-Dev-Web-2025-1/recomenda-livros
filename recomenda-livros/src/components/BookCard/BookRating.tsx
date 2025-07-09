"use client";
import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface BookRatingProps {
  rating: number;
}

export default function BookRating({ rating }: BookRatingProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, my: 0.5 }}>
      <Rating
        name="book-rating"
        value={rating}
        precision={0.5} 
        readOnly 
        icon={<StarIcon sx={{ color: '#FFD700' }} />} 
        emptyIcon={<StarBorderIcon sx={{ color: '#FFD700' }} />} 
        sx={{
          '& .MuiRating-iconFilled': {
            color: '#FFD700',
          },
          '& .MuiRating-iconEmpty': {
            color: '#FFD700',
          },
          fontSize: '1.2rem', 
        }}
      />
      <Typography variant="body2" sx={{ color: '#424242', fontWeight: 500 }}>
        {rating.toFixed(1)} 
      </Typography>
    </Box>
  );
}