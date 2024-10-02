import React, { useEffect} from 'react';
import {HomeSidebar} from '../../components/home-page/navbar/navbar'
import { Routes } from 'react-router-dom';
import * as LayoutPage from '../../components/home-page/home-content/_home-layout/home-layout.js'
import * as ValuesCards from '../../components/home-page/home-content/value-cards/value-cards.js'
import * as SearchBarTemplate from '../../components/home-page/home-content/search-bar/search-bar'
import *as DashboardComponent from '../../components/home-page/home-content/dashboard/other.js'



const Home = () => {
  // Usando o useEffect para definir o background da rota home
  useEffect(() => {
    // Define o background específico para a home
    document.body.style.backgroundSize = "cover"; // Garante que a imagem cubra a tela toda
    document.body.style.height = '100%';
    document.body.style.margin = '0';


// Limpeza: Remove o background ao desmontar o componente
    return () => {
      document.body.style.background = '';
    };
  }, []); // [] significa que o efeito ocorre apenas na montagem e desmontagem do componente



  return (
      <LayoutPage.Container>
        <LayoutPage.Sidebar>
          <HomeSidebar/>
        </LayoutPage.Sidebar>

        <LayoutPage.Content>
          <SearchBarTemplate.ContainerSearchInput>
            <SearchBarTemplate.SearchInputComponent placeholder='Procurar'/>
          </SearchBarTemplate.ContainerSearchInput>
          {/* 3 CARDS SEGUIDOS */}
          <ValuesCards.FirstContainerDashboard>
            <ValuesCards.ComponentSaldoVision/> 
              <ValuesCards.SecondBanner/>
              <ValuesCards.BannerThree/>
          </ValuesCards.FirstContainerDashboard>

            <DashboardComponent.ContainerSecondDashboard/>


        </LayoutPage.Content>
      <Routes>
        {/*########## COLOCAR ROTA DO SIDEBAR ########### */}
        {/* <Route path="/" element={<Dashboards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </LayoutPage.Container>

  );
};

export default Home;