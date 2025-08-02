// recomenda-livros/src/app/Home-Postagens/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Header from '@/src/components/Layout/Header/Header';
import { Box } from '@mui/material';
import Sidebar from '@/src/components/Navigation/Slidebar';
import BookPostCard from '@/src/components/Cards/PostagemCard/BookPostCard';
import { env } from 'process';

interface Post {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  description: string;
  postAuthor: string;
  coverSrc: string;
}

export default function HomePostagensPage() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  // 2. Tipagem correta do useState
  const [posts, setPosts] = useState<Post[]>([]);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

 useEffect(() => {
    const fetchPosts = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API + 'posts'; 
        const res = await fetch(apiUrl);
        const data = await res.json();
        const formattedData = data.map((post: any) => ({
          ...post,
          id: String(post.id),
        }));

        setPosts(formattedData);
      } catch (error) {
        console.error("Falha ao buscar os posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: isSidebarVisible ? '' : '0px',
          transition: 'margin-left 0.3s ease-in-out',
          width: isSidebarVisible ? 'calc(100% - 250px)' : '100%',
        }}
      >
        <Header title="Home" avatar="A" config={true} onMenuClick={handleMenuToggle} />
        <main className='main-content'>
          {posts.map(post => (
            <BookPostCard key={post.id} post={post} />
          ))}
        </main>
      </Box>
    </Box>
  );
}