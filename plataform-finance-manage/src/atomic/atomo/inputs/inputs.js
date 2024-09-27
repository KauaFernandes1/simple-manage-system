import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const InputLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

    // ###### TRATAMENTO DE STATUS #######

      const data = await response.json();

      if (data.success) {
        setMessage('Login realizado com sucesso!');
        navigate('/kaua');
      } else {
        setMessage('Nome ou senha incorretos');
      }
    } catch (error) {
      setMessage('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className='loginTemplate'>
      <form onSubmit={handleSubmit}>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit" className='buttonLogin'>Login</button>
      </form>
      {message && <p>{message}</p>}
    </div> 
  );
};


