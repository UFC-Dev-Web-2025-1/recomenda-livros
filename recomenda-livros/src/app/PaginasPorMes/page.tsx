'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import Slider from '@mui/material/Slider';
import './PaginasPorMes.css';
import Header from '@/src/components/Layout/Header/Header';
import Sidebar from '@/src/components/Navigation/Slidebar';
import { Box } from '@mui/material';
import Footer from '@/src/components/Layout/Footer/footer';

const dataOptions = ['Últimos sete meses', 'Últimos doze meses'];

type ChartDataItem = {
  month: string;
  pages: number;
};

const PaginasPorMes = () => {
  const [range, setRange] = useState(dataOptions[0]);
  const [goal, setGoal] = useState(1200);
  const [chartData, setChartData] = useState<ChartDataItem[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const API_URL = process.env.NEXT_PUBLIC_API;

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(API_URL + 'estatisticas/1');
        const data = await res.json();
        setChartData(data.pagesPerMonth);
      } catch (error) {
        console.error("Falha ao buscar dados do gráfico:", error);
      }
    }
    fetchStats();
  }, [API_URL]);

  const handleGoalChange = (_: Event, newValue: number | number[]) => {
    setGoal(newValue as number);
  };

  const handleMenuToggle = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  
  const totalRead = chartData.reduce((sum, d) => sum + d.pages, 0);

  return (
    <div className="ppm-container">
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
          <Header title="Paginas por Mês" avatar="A" config={true} onMenuClick={handleMenuToggle} />
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
                <h2>{totalRead}/{goal} pág</h2>
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

            {
            chartData.map((item, index) => (
              <div key={index}>
                <p>Mês: {item.month}</p>
                <p>Páginas: {item.pages}</p>
              </div>
            ))}
          </div>

          <Footer />
        </Box>
      </Box>
    </div >
  );
};

export default PaginasPorMes;