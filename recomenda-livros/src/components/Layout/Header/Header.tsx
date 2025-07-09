"use client";

import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { styled } from '@mui/material/styles';
import SearchBar from '../../Forms/SearchBar';

const UserAvatar = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginLeft: theme.spacing(2),
}));

type HeaderProps = {
  title: string;
  avatar: string;
};

export default function Header({ title, avatar }: HeaderProps) {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#154273', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton edge="start" color="inherit" aria-label="back">
            <ArrowBackIosIcon />
          </IconButton>
          <h3>{title}</h3>
        </Box>
        <Box sx={{ flexGrow: 1, maxWidth: '500px' }}>
          <SearchBar />
        </Box>
        <UserAvatar>
          <Typography variant="h6">{avatar}</Typography>
        </UserAvatar>
      </Toolbar>
    </AppBar>
  );
}
