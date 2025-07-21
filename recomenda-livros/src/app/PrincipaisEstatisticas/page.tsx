'use client';
import { FaBars, FaUserCircle, FaChartBar, FaBookOpen, FaClock, FaShareAlt } from 'react-icons/fa';
import './EstatisticasDashboard.css';

export default function EstatisticasDashboard () {
  const totalBooksRead = 25;
  const readingStreak = 13;
  const topGenres = ['Romance', 'Fantasia', 'Suspense'];
  const pagesPerMonth = '30k';
  const avgReadingTime = '3h/d';

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <FaBars className="menu-icon" />
        <h1>Painel Principal de Estatísticas</h1>
        <FaUserCircle className="avatar-icon" />
      </header>

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

      <footer className="dashboard-footer">
        <a href="#foruns">Fóruns <span className="badge">32</span></a>
        <a href="#recomendacoes">Recomendações</a>
      </footer>
    </div>
  );
};


