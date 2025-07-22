'use client';
import { FaBars, FaUserCircle, FaChartBar, FaBookOpen, FaClock, FaShareAlt } from 'react-icons/fa';
import './EstatisticasDashboard.css';
import Header from '@/src/components/Layout/Header/Header';
import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Footer from '@/src/components/Layout/Footer/footer';

export default function EstatisticasDashboard() {
  const totalBooksRead = 25;
  const readingStreak = 13;
  const topGenres = ['Romance', 'Fantasia', 'Suspense'];
  const pagesPerMonth = '30k';
  const avgReadingTime = '3h/d';
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
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
          <Header title="Principais Estatisticas" avatar="A" config={true} onMenuClick={handleMenuToggle} />

          <div className="summary-row">
            <div className="summary-card">
              <p className="summary-label">Total de livros lidos:</p>
              <p className="summary-value">{totalBooksRead}</p>
            </div>
            <div className="summary-card">
              <p className="summary-label">Sequência de Leitura:</p>
              <p className="summary-value">{readingStreak} dias</p>
            </div>
          </div>

          <main className="stats-grid">
            <div className="stat-card">
              <FaChartBar className="stat-icon" />
              <h2>Gêneros mais consumidos</h2>
              <p className="stat-text">{topGenres.join(', ')}...</p>
              <FaShareAlt className="share-icon" />
            </div>

            <div className="stat-card">
              <FaBookOpen className="stat-icon" />
              <h2>Páginas lidas por mês</h2>
              <p className="stat-text">{pagesPerMonth}</p>
              <FaShareAlt className="share-icon" />
            </div>

            <div className="stat-card">
              <FaClock className="stat-icon" />
              <h2>Tempo médio de leitura</h2>
              <p className="stat-text">{avgReadingTime}</p>
              <FaShareAlt className="share-icon" />
            </div>
          </main>

          <Footer />
        </Box>

      </Box>
    </div>
  );
};


