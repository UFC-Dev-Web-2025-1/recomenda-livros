"use client";
import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

interface BookCoverProps {
  src: string;
  alt: string;
}

export default function BookCover({ src, alt }: BookCoverProps) {
  return (
    <Box
      sx={{
        width: { xs: '100px', sm: '120px', md: '140px' }, 
        height: { xs: '150px', sm: '180px', md: '210px' }, 
        borderRadius: '8px', 
        overflow: 'hidden', 
        flexShrink: 0, 
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={140} 
        height={210} 
        style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
        priority 
      />
    </Box>
  );
}