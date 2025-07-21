"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import SearchBar from '@/src/components/Forms/SearchBar'; 

interface HeaderProps {
  title: string;
  avatar: string;
  config: Boolean; 
  onMenuClick: () => void; 
}

export default function Header({ title, avatar,  config, onMenuClick }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E63B4', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', paddingLeft: { xs: 1, md: 2 } }}>
       
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={onMenuClick} 
          sx={{ mr: { xs: 1, md: 2 } }} 
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6"  component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {title}
        </Typography>

        <Box sx={{ flexGrow: 1, display: config ? 'flex' : 'none', justifyContent: 'center' }}>
          <SearchBar />
        </Box>

        <Avatar sx={{ bgcolor: 'orange', ml: { xs: 1, md: 2 } }}>{avatar}</Avatar>
      </Toolbar>
    </AppBar>
  );
}