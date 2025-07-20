import { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaClock, FaBookOpen, FaRegCalendarAlt } from 'react-icons/fa';
import './TempoLeitura.css';

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

  return (
    <div className="avg-container">
      <header className="avg-header">
        <FaBars className="avg-menu" />
        <h1>Tempo médio de leitura</h1>
        <FaUserCircle className="avg-avatar" />
      </header>

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

      <footer className="avg-footer">
        <a href="#foruns">Fóruns <span className="badge">32</span></a>
        <a href="#recomendacoes">Recomendações</a>
      </footer>
    </div>
  );
}