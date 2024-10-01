import React, { useEffect } from 'react';
import {HomeNavbar} from '../../components/home-page/navbar/navbar'
import { Routes } from 'react-router-dom';
import {Sidebar, Content, Container,ComponentSaldoVision} from './home-page-styles.js'


const Home = () => {
  // Usando o useEffect para definir o background da rota home
  useEffect(() => {
    // Define o background específico para a home
    document.body.style.background = "linear-gradient(to right, #FFFFFF, #C3C3C3"; // Imagem de fundo para a home
    document.body.style.backgroundSize = "cover"; // Garante que a imagem cubra a tela toda
    document.body.style.height = '100%';
    document.body.style.margin = '0';


// Limpeza: Remove o background ao desmontar o componente
    return () => {
      document.body.style.background = '';
    };
  }, []); // [] significa que o efeito ocorre apenas na montagem e desmontagem do componente



  return (
      <Container>
        <Sidebar>
          <HomeNavbar/>
        </Sidebar>
        <Content>
          <ComponentSaldoVision/>
        

        </Content>
      <Routes>
        {/*########## COLOCAR ROTA DO SIDEBAR ########### */}
        {/* <Route path="/" element={<Dashboards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />  */}
      </Routes>
    </Container>

  );
};

export default Home;
