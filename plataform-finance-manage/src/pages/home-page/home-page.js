import React, { useEffect } from 'react';
import { HomeSidebar } from '../../components/_home-page/home-content/sidebar/navbar.js';
import { Routes, Route } from 'react-router-dom';
import * as DashboardTemplates from '../../components/_home-page/home-content/dashboard/objective-dashboard.js';
import * as LayoutPage from '../../components/_home-page/home-content/_home-layout/home-layout.js';
import * as ValuesCards from '../../components/_home-page/home-content/value-cards/value-cards.js';
import * as SearchBarTemplate from '../../components/_home-page/home-content/search-bar/search-bar.js';
import Metricas from '../../components/_home-page/home-content/sub-routes/metricas-route/metricas.js';
// import * as LayoutMetricas from '../../components/_home-page/home-content/sub-routes/metricas-route/components-metric/layout/principal-container.js';
import {CardActions} from '../../components/_home-page/home-content/card-actions/card-actions.js'
import {CardContas} from '../../components/_home-page/home-content/card-contas/card-contas.js'


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
        <HomeSidebar />
      </LayoutPage.Sidebar>

      {/* Conteúdo Principal */}
      <LayoutPage.Content>
        <SearchBarTemplate.ContainerSearchInput>
          <SearchBarTemplate.SearchInputComponent placeholder="Procurar" />
        </SearchBarTemplate.ContainerSearchInput>

        {/* Rotas para Sub-Rotas */}
        <Routes>
          {/* Rota principal /home */}
          <Route
            path="/"
            element={
              <>
                {/* 3 CARDS SEGUIDOS */}
                <ValuesCards.FirstContainerDashboard>
                  <ValuesCards.ComponentSaldoVision />
                  <ValuesCards.SecondBanner />
                  <ValuesCards.BannerThree />
                </ValuesCards.FirstContainerDashboard>

                {/* Dashboard com Gráfico */}
                <ValuesCards.ContainerSecondDashboard>
                  <DashboardTemplates.CardWithChart />
                  <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  <CardActions/>
                  </div>
                  <CardContas/>
                </ValuesCards.ContainerSecondDashboard>
                
                
              </>
            }
          />

          {/* Sub-rota /home/metricas */}
          <Route
            path="metricas"
            element={
                <Metricas />
            }
          />
          {/* <Route
            path="compartilhar"
            element={

            }
          
          /> */}

        </Routes>
      </LayoutPage.Content>
    </LayoutPage.Container>
  );
};

export default Home;
