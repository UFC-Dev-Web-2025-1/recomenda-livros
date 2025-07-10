// src/components/Layout/Sidebar/Sidebar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSidebar = styled(Box)(({ theme }) => ({
  width: 250, // Largura fixa da sidebar
  backgroundColor: '#154273', // Cor de fundo da sidebar
  color: 'white',
  paddingTop: theme.spacing(4), // Espaçamento superior
  display: 'flex',
  flexDirection: 'column',
  height: '100vh', // Ocupa a altura total da viewport
  flexShrink: 0, // Impede que a sidebar encolha

  // Regra principal para esconder/mostrar a sidebar
  // Será controlado pela prop 'isVisible'
}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#0e3152', // Cor de fundo ao passar o mouse
  },
}));

const SidebarLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
});

interface SidebarProps {
  isVisible: boolean; // Nova prop para controlar a visibilidade
  onLinkClick: () => void; // Para fechar a sidebar ao clicar em um link (opcional, mas bom para mobile)
}

export default function Sidebar({ isVisible, onLinkClick }: SidebarProps) {
  const menuItems = [
    { text: 'Home', href: '/Home-Postagens' },
    { text: 'Minha Estante', href: '/MinhaEstante' },
    { text: 'Selecionar Livro', href: '/SelecionarLivro' },
    { text: 'Principal de Estatísticas', href: '/Estatisticas' },
    { text: 'Login', href: '/' },
  ];

  return (
    <StyledSidebar
      sx={{
        display: isVisible ? 'flex' : 'none', // Controla a visibilidade com base na prop
        // Para transição suave (opcional, pode ser mais avançado)
        transition: 'width 0.3s ease-in-out',
        width: isVisible ? 250 : 0,
        overflow: 'hidden', // Esconde o conteúdo quando largura é 0
      }}
    >
      <List>
        {menuItems.map((item) => (
          <SidebarItem key={item.text} disablePadding>
            <SidebarLink href={item.href} onClick={onLinkClick}> {/* Adiciona onClick */}
              <ListItemButton>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </SidebarLink>
          </SidebarItem>
        ))}
      </List>
    </StyledSidebar>
  );
}