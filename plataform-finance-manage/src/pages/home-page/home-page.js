import React, { useEffect } from 'react';

const Home = () => {
  // Usando o useEffect para definir o background da rota home
  useEffect(() => {
    // Define o background específico para a home
    document.body.style.background = "linear-gradient(to right, #F5F5, #2a5298"; // Imagem de fundo para a home
    document.body.style.backgroundSize = "cover"; // Garante que a imagem cubra a tela toda
    document.body.style.height = '100%';
    document.body.style.margin = '0';

    // Limpeza: Remove o background ao desmontar o componente
    return () => {
      document.body.style.background = '';
    };
  }, []); // [] significa que o efeito ocorre apenas na montagem e desmontagem do componente

  return (
    <div className='full-page-home'>
      <h1>Bem-vindo à Página Home!</h1>
      <p>Você foi redirecionado com sucesso após o login.</p>
    </div>
  );
};

export default Home;
