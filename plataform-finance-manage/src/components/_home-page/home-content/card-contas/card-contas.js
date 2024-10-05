import React from 'react';
import * as Container from './card-styles-contas';
import { HeaderContas } from './header-contas';

// Dados Dummy para as contas (seu exemplo pode ser substituído por dados dinâmicos mais tarde)
const contasDummy = [
  { nome: 'Aluguel', valor: 1200.00, vencimento: '10/10/2024' },
  { nome: 'Supermercado', valor: 450.75, vencimento: '15/10/2024' },
  { nome: 'Internet', valor: 99.90, vencimento: '20/10/2024' },
];

// Calcular o total de gastos a partir das contas
const totalGastos = contasDummy.reduce((total, conta) => total + conta.valor, 0);

export const CardContas = () => {
  return (
    <Container.Container>
      {/* Passando as informações para o HeaderContas */}
      <HeaderContas totalGastos={totalGastos} contas={contasDummy} />
    </Container.Container>
  );
};
