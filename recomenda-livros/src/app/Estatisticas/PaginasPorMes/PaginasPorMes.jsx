import { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Slider from '@mui/material/Slider';
import './PaginasPorMes.css';

const dataOptions = ['Últimos sete meses', 'Últimos doze meses'];
const initialData = [
  { month: 'Jan', pages: 800 },
  { month: 'Fev', pages: 600 },
  { month: 'Mar', pages: 700 },
  { month: 'Abr', pages: 1400 },
  { month: 'Mai', pages: 1200 },
  { month: 'Jun', pages: 1600 },
  { month: 'Jul', pages: 950 },
];

const PaginasPorMes = () => {
  const [range, setRange] = useState(dataOptions[0]);
  const [goal, setGoal] = useState(1200);
  const [chartData] = useState(initialData);

  const handleGoalChange = (e, newValue) => {
    setGoal(newValue);
  };

  return (
    <div className="ppm-container">
      <header className="ppm-header">
        <FaBars className="ppm-icon" />
        <h1>Páginas lidas por mês</h1>
        <FaUserCircle className="ppm-avatar" />
      </header>

      <div className="ppm-controls">
        <select value={range} onChange={e => setRange(e.target.value)}>
          {dataOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>

      <div className="ppm-status">
        <div className="current-goal">
          <p>Meta atual:</p>
          <p className="goal-value">{goal} páginas</p>
        </div>
        <div className="adjust-goal">
          <label>Ajustar meta</label>
          <Slider
            value={goal}
            min={0}
            max={3000}
            step={100}
            onChange={handleGoalChange}
            className="ppm-slider"
          />
          <input
            type="number"
            value={goal}
            onChange={e => setGoal(Number(e.target.value))}
            className="goal-input"
          />
        </div>
      </div>

      <div className="ppm-chart-insights">
        <div className="chart-card">
          <div className="chart-header">
            <h2>{chartData.reduce((sum, d) => sum + d.pages, 0)}/{goal} pág</h2>
            <p className="comp">+22% que mês anterior</p>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pages" fill="#5a7bb1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="insights-card">
          <h3>Insights</h3>
          <p>Mês destaque: Julho (1800 pág.)</p>
          <p>Média mensal: 1250 pág.</p>
          <p>Comparativo: +22% vs período anterior</p>
        </div>
      </div>

      <footer className="ppm-footer">
        <a href="#foruns">Fóruns<span className="badge">32</span></a>
        <a href="#recomendacoes">Recomendações</a>
      </footer>
    </div>
  );
};

export default PaginasPorMes;