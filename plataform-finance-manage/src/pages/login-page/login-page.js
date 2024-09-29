import React, { useEffect } from 'react';
import './login.css';
import LoginSystem from '../../atomic/atomo/login-system/login-system.js';

function Login() {
  // Usando o useEffect para aplicar estilos ao carregar o componente
  useEffect(() => {
    // Define o background para a rota de login
    document.body.style.background = 'linear-gradient(to right, #1e3c72, #2a5298)'; // Exemplo de gradiente
    document.body.style.height = '100vh';
    document.body.style.margin = '0';

    // Limpeza: Quando sair da rota login, remove o estilo aplicado
    return () => {
      document.body.style.background = '';
    };
  }, []); // [] indica que o efeito ocorre apenas na montagem e desmontagem do componente

  return (
    <LoginSystem />
  );
}

export default Login;
