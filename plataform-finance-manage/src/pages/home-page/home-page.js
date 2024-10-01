import React, { useEffect } from 'react';
import {HomeNavbar} from '../../components/home-page/navbar/navbar'
import { Routes } from 'react-router-dom';
import * as HomeStyles from './home-page-styles'; //importa tudo de page-styles
// import { Funnel } from "phosphor-react";



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
      <HomeStyles.Container>
        <HomeStyles.Sidebar>
          <HomeNavbar/>
        </HomeStyles.Sidebar>

        <HomeStyles.Content>
          <HomeStyles.ContainerSearchInput>
            <HomeStyles.SearchInputComponent placeholder='Procurar'/>
            {/* <Funnel size={24} color={'black'} /> */} 

          </HomeStyles.ContainerSearchInput>
          <HomeStyles.ComponentSaldoVision/>
        

        </HomeStyles.Content>
      <Routes>
        {/*########## COLOCAR ROTA DO SIDEBAR ########### */}
        {/* <Route path="/" element={<Dashboards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </HomeStyles.Container>

  );
};

export default Home;
