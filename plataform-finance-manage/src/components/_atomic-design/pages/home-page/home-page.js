// Home.js
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Sidebar} from '../../organism/sidebar'; // Importando o sidebar
import SearchBar from '../../molecules/search_bar.js'; // A barra de busca como molécula
import SaldoCard from '../../organism/saldo-card.js'; // O card de saldo como organismo
import * as DashboardTemplates from '../../../_home-page/home-content/dashboard/objective-dashboard.js';
import * as LayoutPage from '../../../_home-page/home-content/_home-layout/home-layout.js';
import * as ValuesCards from '../../../_home-page/home-content/value-cards/value-cards.js';
import {CardActions} from '../../../_home-page/home-content/card-actions/card-actions.js';
import {CardContas} from '../../../_home-page/home-content/card-contas/card-contas.js';
import CardComponent from '../../../_home-page/home-content/banner-marketing/banner-marketing.js';
import Metricas from '../../../_home-page/home-content/sub-routes/metricas-route/metricas.js';
import Compartilhar from '../../../_home-page/home-content/sub-routes/compartilhar-routes/compartilhar.js';
import Extratos from '../../../_home-page/home-content/sub-routes/extratos-routes/extratos.js';
import Cofre from '../../../_home-page/home-content/sub-routes/cofre-routes/cofre.js';

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundSize = 'cover';
    document.body.style.height = '100%';
    document.body.style.margin = '0';

    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    <LayoutPage.Container>
      {/* Sidebar e Navegação */}
      <LayoutPage.Sidebar>
        <Sidebar />
      </LayoutPage.Sidebar>

      {/* Conteúdo Principal */}
      <LayoutPage.Content>
        <SearchBar />

        {/* Rotas para Sub-Rotas */}
        <Routes>
          {/* Rota principal /home */}
          <Route
            path="/"
            element={
              <>
                {/* 3 CARDS SEGUIDOS */}
                <ValuesCards.FirstContainerDashboard>
                  <SaldoCard />
                  <ValuesCards.SecondBanner />
                  <ValuesCards.BannerThree />
                </ValuesCards.FirstContainerDashboard>

                {/* Dashboard com Gráfico */}
                <ValuesCards.ContainerSecondDashboard>
                  <DashboardTemplates.CardWithChart />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                      <CardActions />
                    </div>
                    <CardComponent />
                  </div>
                  <CardContas />
                </ValuesCards.ContainerSecondDashboard>
              </>
            }
          />

          {/* Sub-rota /home/metricas */}
          <Route path="metricas" element={<Metricas />} />
          <Route path="compartilhar" element={<Compartilhar />} />
          <Route path="extratos" element={<Extratos />} />
          <Route path="cofre" element={<Cofre />} />
        </Routes>
      </LayoutPage.Content>
    </LayoutPage.Container>
  );
};

export default Home;
