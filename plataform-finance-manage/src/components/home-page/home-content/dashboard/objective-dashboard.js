// src/components/charts/DashboardChart.js
import React from 'react';
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from 'chart.js';

// Registre os elementos e plugins do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

const DashboardChart = ({ type = 'doughnut', data, options }) => {
  const chartComponents = {
    doughnut: Doughnut,
    bar: Bar,
    line: Line,
    pie: Pie,
  };

  // Definir qual gráfico será usado com base no prop `type`
  const ChartComponent = chartComponents[type];

  return (
    <div style={{ position: 'relative', height: '300px', width: '300px' }}>
      <ChartComponent data={data} options={options} />
    </div>
  );
};

export default DashboardChart;
