"use client";
import React, { useState } from 'react';
import { InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'white',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2), // padding left ajustado
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSearch = () => {
    alert(`Buscando por: ${search}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <SearchContainer>
      <StyledInputBase
        placeholder="Buscar Livro..."
        inputProps={{ 'aria-label': 'search' }}
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        endAdornment={
          <IconButton onClick={handleSearch} aria-label="search">
            <SearchIcon />
          </IconButton>
        }
      />
    </SearchContainer>
  );
}
