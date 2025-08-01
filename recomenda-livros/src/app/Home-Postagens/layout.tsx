"use client";

import React from 'react';
import '../globals.css';
import Footer from '@/src/components/Layout/Footer/footer';



export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Footer />
            {children}
        </>
    );
}
