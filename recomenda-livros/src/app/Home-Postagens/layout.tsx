"use client";

import React from 'react';
import '../globals.css';
import Header from '../../components/Layout/Header/Header';
import Footer from '@/src/components/Layout/Footer/footer';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SearchBar from '@/src/components/Forms/SearchBar';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="pt-BR">
                <body>
                    <AppBar position="static" sx={{ backgroundColor: '#154273', boxShadow: 'none' }}>
                        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton edge="start" color="inherit" aria-label="back">
                                    {/* <ArrowBackIosIcon /> */}
                                </IconButton>
                                <h3>{}</h3>
                            </Box>
                            <Box sx={{ flexGrow: 1, maxWidth: '500px' }}>
                                <SearchBar />
                            </Box>
                          
                                <Typography variant="h6">{}</Typography>
                          
                        </Toolbar>
                    </AppBar>
                    <Footer />

                    {children}

                </body>
            </html>
        </>
    );
}
