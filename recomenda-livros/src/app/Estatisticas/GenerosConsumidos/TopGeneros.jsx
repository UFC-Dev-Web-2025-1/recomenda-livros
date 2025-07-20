import { FaBars, FaUserCircle } from 'react-icons/fa';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer as ReResponsiveContainer,
} from 'recharts';
import './TopGeneros.css';

const dataDonut = [
  { name: 'Ficção', value: 40, color: '#FFD27F' },
  { name: 'Romance', value: 10, color: '#8FCC5C' },
  { name: 'Fantasia', value: 18, color: '#A7E0F2' },
  { name: 'Suspense', value: 18, color: '#FF847F' },
  { name: 'Biografia', value: 14, color: '#B086D6' },
];

const dataBar = dataDonut; 

export default function TopGeneros() {
  return (
    <div className="genres-container">
      <header className="genres-header">
        <FaBars className="genres-menu" />
        <h1>Gêneros mais consumidos por você</h1>
        <FaUserCircle className="genres-avatar" />
      </header>
      <div className="genres-content">
        <div className="donut-chart">
          <PieChart width={300} height={300}>
            <Pie
              data={dataDonut}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={4}
            >
              {dataDonut.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <ReTooltip />
          </PieChart>
          <div className="donut-center">
            <div className="trophy-icon">🏆</div>
            <div className="trophy-text">Gêneros</div>
          </div>
        </div>
        <div className="bar-chart-container">
          <ReResponsiveContainer width={400} height={300}>
            <BarChart data={dataBar} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
              <XAxis dataKey="name" />
              <Bar dataKey="value">
                {dataBar.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ReResponsiveContainer>
        </div>
      </div>
      <footer className="genres-footer">
        <a href="#foruns">Fóruns <span className="badge">32</span></a>
        <a href="#recomendacoes">Recomendações</a>
      </footer>
    </div>
  );
}
