"use client";

import React from 'react';
import '../globals.css';
import Footer from '@/src/components/Layout/Footer/footer';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import SearchBar from '@/src/components/Forms/SearchBar';
import Header from '@/src/components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <html lang="pt-BR">
                <body>

                    
                    <Footer />

                    { children}

                </body>
            </html>
        </>
    );
}
