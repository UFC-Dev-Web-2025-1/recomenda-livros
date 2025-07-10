// src/components/Layout/Header/Header.tsx
"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Importa o ícone de hambúrguer
import SearchBar from '@/src/components/Forms/SearchBar'; // Reutilizando a SearchBar

interface HeaderProps {
  title: string;
  avatar: string;
  onMenuClick: () => void; // A função para lidar com o clique do menu
}

export default function Header({ title, avatar, onMenuClick }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E63B4', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: { xs: 1, md: 2 } }}> {/* Ajusta padding */}
        {/* Ícone de Menu Hambúrguer */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick} // Chama a função passada pelo pai
          sx={{ mr: { xs: 1, md: 2 } }} // Espaçamento à direita
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </Box>

        <Avatar sx={{ bgcolor: 'orange', ml: { xs: 1, md: 2 } }}>{avatar}</Avatar>
      </Toolbar>
    </AppBar>
  );
}