'use client';
import { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaClock, FaBookOpen, FaRegCalendarAlt } from 'react-icons/fa';
import './TempoLeitura.css';
import Header from '@/src/components/Layout/Header/Header';
import { Box } from '@mui/material';
import Sidebar from '@/src/components/Navigation/Slidebar';
import Footer from '@/src/components/Layout/Footer/footer';

const rangeOptions = ['Últimos seis meses', 'Últimos doze meses'];
const monthlyData = [
  { month: 'Jan', hours: 60 },
  { month: 'Fev', hours: 80 },
  { month: 'Mar', hours: 70 },
  { month: 'Abr', hours: 95 },
  { month: 'Mai', hours: 140 },
  { month: 'Jun', hours: 100 },
];

const insights = {
  fastest: { book: 'Duna', time: '3d' },
  longestSession: '90min',
};

export default function ReadingTime() {
  const [range, setRange] = useState(rangeOptions[0]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="avg-container">
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
          <Header title="Tempo Medio de Leitura" avatar="A" config={true} onMenuClick={handleMenuToggle} />

          <div className="avg-controls">
            <select value={range} onChange={e => setRange(e.target.value)}>
              {rangeOptions.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>

          <div className="avg-chart">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="hours" stroke="#F4B400" fill="#F4B40033" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="avg-insights-cards">
            <div className="insights-text">
              <h3>Insights:</h3>
              <p>Leitura mais rápida: {insights.fastest.book} | {insights.fastest.time}</p>
              <p>Sessão mais longa: {insights.longestSession}</p>
            </div>
            <div className="cards-row">
              <div className="stat-card">
                <FaRegCalendarAlt className="card-icon" />
                <p className="card-title">Tempo por sessão</p>
                <p className="card-value">40min</p>
              </div>
              <div className="stat-card">
                <FaBookOpen className="card-icon" />
                <p className="card-title">Tempo por livro</p>
                <p className="card-value">40min</p>
              </div>
              <div className="stat-card">
                <FaClock className="card-icon" />
                <p className="card-title">Tempo diário</p>
                <p className="card-value">40min</p>
              </div>
            </div>
          </div>

              <Footer />
        </Box>
      </Box>
    </div>
  );
}