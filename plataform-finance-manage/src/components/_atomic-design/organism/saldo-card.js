// components/organisms/SaldoCard.js
import styled from 'styled-components';
import { useEffect, useState } from 'react';

const StyledCard = styled.div`
  display: flex;
  width: 30%;
  height: 130px;
  background: ${({ theme }) => theme.colors.primaryDetails};
  color: white;
  border-radius: 8px;
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h4`
  margin: 0;
`;

const SaldoCard = () => {
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    fetch('http://localhost:7000/api/saldo')
      .then((response) => response.json())
      .then((data) => setSaldo(data.saldo))
      .catch((error) => console.error('Erro ao buscar saldo:', error));
  }, []);

  return (
    <StyledCard>
      <Title>Saldo Disponível</Title>
      <span>{`R$ ${saldo.toFixed(2)}`}</span>
    </StyledCard>
  );
};

export default SaldoCard;
