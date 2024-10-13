// Cofre.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CofreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 200px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 18px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Cofre = () => {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (password.length !== 4) {
      setError('A senha deve ter 4 dígitos.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/cofre', { password });

      if (response.data.authorized) {
        setAuthorized(true);
        setError('');
      } else {
        setError('Senha incorreta!');
      }
    } catch (err) {
      setError('Erro ao validar senha.');
    }
  };

  return (
    <CofreContainer>
      {!authorized ? (
        <>
          <h2>Digite a senha para acessar o cofre:</h2>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            maxLength="4"
            placeholder="4 dígitos"
          />
          <Button onClick={handleSubmit}>Entrar</Button>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </>
      ) : (
        <div>
          <h2>Conteúdo Secreto</h2>
          <p>Aqui está o conteúdo protegido do cofre!</p>
        </div>
      )}
    </CofreContainer>
  );
};

export default Cofre;
