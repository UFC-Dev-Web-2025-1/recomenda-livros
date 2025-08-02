'use client';
import { FaChartBar, FaBookOpen, FaClock, FaShareAlt } from 'react-icons/fa';
import './EstatisticasDashboard.css';
import Header from '@/src/components/Layout/Header/Header';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Footer from '@/src/components/Layout/Footer/footer';

interface Estatisticas {
  totalBooksRead: number;
  readingStreak: number;
  topGenres: string[];
  pagesPerMonth: { month: string; pages: number }[];
  avgReadingTime: string;
}

export default function EstatisticasDashboard() {
  const [stats, setStats] = useState<Estatisticas | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API;

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(API_URL + 'estatisticas/1');
        const data = await res.json();
        setStats(data);
      } catch (error) {
        console.error("Falha ao buscar estatísticas:", error);
      }
    }
    fetchStats();
  }, [API_URL]);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  
  // Calcula o total de páginas lidas somando as páginas de cada mês
  const totalPagesRead = stats?.pagesPerMonth.reduce((sum, current) => sum + current.pages, 0) || 0;

  return (
    <div className="dashboard-container">
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
          <Header title="Principais Estatísticas" avatar="A" config={true} onMenuClick={handleMenuToggle} />

          <div className="summary-row">
            <div className="summary-card">
              <p className="summary-label">Total de livros lidos:</p>
              <p className="summary-value">{stats?.totalBooksRead ?? 0}</p>
            </div>
            <div className="summary-card">
              <p className="summary-label">Sequência de Leitura:</p>
              <p className="summary-value">{stats?.readingStreak ?? 0} dias</p>
            </div>
          </div>

          <main className="stats-grid">
            <div className="stat-card">
              <FaChartBar className="stat-icon" />
              <h2>Gêneros mais consumidos</h2>
              <p className="stat-text">{stats?.topGenres.join(', ') ?? 'Nenhum gênero ainda'}...</p>
              <FaShareAlt className="share-icon" />
            </div>

            <div className="stat-card">
              <FaBookOpen className="stat-icon" />
              <h2>Páginas lidas por mês</h2>
              <p className="stat-text">{totalPagesRead} pág.</p>
              <FaShareAlt className="share-icon" />
            </div>

            <div className="stat-card">
              <FaClock className="stat-icon" />
              <h2>Tempo médio de leitura</h2>
              <p className="stat-text">{stats?.avgReadingTime ?? '0h/d'}</p>
              <FaShareAlt className="share-icon" />
            </div>
          </main>

          <Footer />
        </Box>
      </Box>
    </div>
  );
};