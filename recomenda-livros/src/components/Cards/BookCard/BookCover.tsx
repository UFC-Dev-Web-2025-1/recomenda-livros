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
        width: { xs: '100px', sm: '120px', md: '140px' }, // Largura responsiva
        height: { xs: '150px', sm: '180px', md: '210px' }, // Altura responsiva (proporção aprox. 1.5)
        borderRadius: '8px', // Bordas arredondadas
        overflow: 'hidden', // Garante que a imagem se ajuste ao borderRadius
        flexShrink: 0, // Impede que a imagem encolha em layouts flexíveis
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={140} // Largura intrínseca para otimização do Next.js
        height={210} // Altura intrínseca para otimização do Next.js
        style={{ objectFit: 'cover', width: '100%', height: '100%' }} // Estilo para preencher o Box
        priority // Considerar usar se for a imagem principal da tela
      />
    </Box>
  );
}