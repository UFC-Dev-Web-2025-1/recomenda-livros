"use client";

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { FaChartLine, FaBookReader, FaCalendarAlt, FaStar }   from 'react-icons/fa';
import Header from '@/src/components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Footer from '@/src/components/Layout/Footer/footer';
import styles from './estatistica.module.css';

const ICONS_MAP: Record<string, React.ReactElement> = {
  chart: <FaChartLine className={styles.cardIcon} />,
  book: <FaBookReader className={styles.cardIcon} />,
  calendar: <FaCalendarAlt className={styles.cardIcon} />,
  star: <FaStar className={styles.cardIcon} />
};

export default function Estatisticas() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [cards, setCards] = useState<
    { id: number; title: string; description: string; icon: string; link: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

  useEffect(() => {
    async function loadStats() {
      try {
        const res = await fetch(`${API_URL}/estadisticas`);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        setCards(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadStats();
  }, [API_URL]);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          transition: 'margin-left 0.3s ease-in-out',
          width: isSidebarVisible ? 'calc(100% - 250px)' : '100%'
        }}
      >
        <Header
          title="Dashboard de Estatísticas"
          avatar="A"
          config={false}
          onMenuClick={handleMenuToggle}
        />

        <div className={styles.container}>
          <section className={styles.mainContent}>
            <Typography variant="h4" component="h1" className={styles.sectionTitle}>
              Suas Estatísticas de Leitura
            </Typography>

            {loading && <Typography>Carregando estatísticas…</Typography>}
            {error && <Typography color="error">Erro: {error}</Typography>}

            {!loading && !error && (
              <div className={styles.cardsGrid}>
                {cards.map(card => (
                  <Link key={card.id} href={card.link} passHref className={styles.card}>
                    {ICONS_MAP[card.icon] || <FaChartLine className={styles.cardIcon} />}
                    <Typography variant="h5" component="h2" className={styles.cardTitle}>
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className={styles.cardDescription}>
                      {card.description}
                    </Typography>
                  </Link>
                ))}
              </div>
            )}
          </section>
        </div>

        <Footer />
      </Box>
    </Box>
  );
}
