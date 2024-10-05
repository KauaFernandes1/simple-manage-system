import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import styled from 'styled-components'
import * as Styles from './styles-objective-dashboard'

export const CardWithChart = () => {
    // Dados e configuração do gráfico
    const data = {
      labels: ['Carro', 'Casa', 'Empresa'],
      datasets: [
        {
          label: 'Meus objetivos',
          data: [300, 50, 100],
          backgroundColor: ['#003399', '#0066FF', '#66CCFF'],
          hoverBackgroundColor: ['#003399', '#0066FF', '#66CCFF'],
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          position: 'bottom', // Muda a posição da legenda para baixo
          labels: {
            boxWidth: 20, // Tamanho da caixa de cor na legenda
            padding: 15,
            borderRadius: '16px'
          },
        },
      },
      maintainAspectRatio: false,
    };
  
  
  
    return (
      <Styles.CardDashboard>
        <h2 style={{paddingLeft: '20px'}}>Objetivos</h2>
        <div style={{ width: '300px', height: '200px', padding: '20px'  }}>
        <Doughnut data={data} options={options} />
      </div>
      </Styles.CardDashboard>
    );
  }





  export const ContainerSecondDashboard = styled.div`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  `
  