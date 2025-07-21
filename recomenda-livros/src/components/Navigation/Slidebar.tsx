"use client";

import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { on } from 'events';


const StyledSidebar = styled(Box)(({ theme }) => ({
  width: 250,
  backgroundColor: '#154273',
  color: 'white',
  paddingTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  flexShrink: 0,


}));

const SidebarItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#0e3152',
  },
}));

const SidebarLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
});

interface SidebarProps {
  isVisible: boolean;
  onLinkClick: () => void;
}

export default function Sidebar({ isVisible, onLinkClick }: SidebarProps) {
  const handleLinkClick = () => {
    localStorage.clear();
  }
  const menuItems = [
    { text: 'Home', href: '/Home-Postagens' },
    { text: 'Minha Estante', href: '/MinhaEstante' },
    { text: 'Selecionar Livro', href: '/SelecionarLivro' },
    { text: 'Principal de Estatísticas', href: '/Estatisticas' },
    { text: 'Perfil', href: '/ConfiguracoesPerfil' },
    { text: 'Login', href: '/' },
    { text: 'Sair', onClick: handleLinkClick, href: '/' },
  ];


  return (
    <StyledSidebar
      sx={{
        display: isVisible ? 'flex' : 'none',
        transition: 'width 0.3s ease-in-out',
        width: isVisible ? 250 : 0,
        overflow: 'hidden',
      }}
    >
      <List>
        {menuItems.map((item) => (
          <SidebarItem key={item.text} disablePadding>
            <SidebarLink href={item.href} onClick={() => {
              if (item.onClick) {
                item.onClick();
              }
              onLinkClick();
            }}>
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