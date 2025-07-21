"use client";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { FaChartLine, FaBookReader, FaCalendarAlt, FaStar } from 'react-icons/fa'; 
import Header from '@/src/components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Footer from '@/src/components/Layout/Footer/footer';
import styles from './estatistica.module.css';

export default function Estatisticas() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const statisticCards = [
    {
      title: 'Principais Estatísticas',
      description: 'Visão geral do seu progresso de leitura e conquistas.',
      icon: <FaChartLine className={styles.cardIcon} />,
      link: '/PrincipaisEstatisticas',
    },
    {
      title: 'Tempo Médio de Leitura',
      description: 'Analise seu tempo de leitura por sessão, dia e livro.',
      icon: <FaBookReader className={styles.cardIcon} />,
      link: '/TempoMedioLeitura',
    },
    {
      title: 'Páginas por Mês',
      description: 'Acompanhe o número de páginas lidas mensalmente e suas metas.',
      icon: <FaCalendarAlt className={styles.cardIcon} />,
      link: '/PaginasPorMes',
    },
    {
      title: 'Gêneros Consumidos',
      description: 'Descubra seus gêneros favoritos e tendências de leitura.',
      icon: <FaStar className={styles.cardIcon} />,
      link: '/GenerosConsumidos',
    },
  ];

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f7fa' }}>
      <Sidebar isVisible={isSidebarVisible} onLinkClick={handleMenuToggle} />

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          marginLeft: isSidebarVisible ? '0px' : '0px',
          transition: 'margin-left 0.3s ease-in-out',
          width: isSidebarVisible ? 'calc(100% - 250px)' : '100%',
        }}
      >
        <Header title="Dashboard de Estatísticas" avatar="A" config={false} onMenuClick={handleMenuToggle} />

        <div className={styles.container}>
          <section className={styles.mainContent}>
            <Typography variant="h4" component="h1" className={styles.sectionTitle}>
              Suas Estatísticas de Leitura
            </Typography>

            <div className={styles.cardsGrid}>
              {statisticCards.map((card, index) => (
                <Link key={index} href={card.link} passHref className={styles.card}>
                  {card.icon}
                  <Typography variant="h5" component="h2" className={styles.cardTitle}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className={styles.cardDescription}>
                    {card.description}
                  </Typography>
                </Link>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </Box>
    </Box>
  );
}