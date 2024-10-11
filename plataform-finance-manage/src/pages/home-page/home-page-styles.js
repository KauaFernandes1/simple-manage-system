import styled from 'styled-components'
import React, { useEffect, useState } from 'react';
import { colors } from '../../components/_atomic-design/_librarys/colors'


export const StyleBalanceVision = styled.div`
display: flex;
width: 30%;
height: 130px;
background: $(colors.primaryDetails);
color: white;
border-radius: 8px;
box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);

`;




export const ContainerSearchInput = styled.div`
width: 100%
background-color: transparent;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 8px;
`;

export const SearchInputComponent = styled.input`
width: 400px;
height: 35px;
background-color: #ECECEC;
margin-bottom: 32px;
border: none;
border-radius: 8px;
outline: none;
padding-left:12px;

`;




// ########## PARTE CARD SALDO ##############

export const StyledSaldoCard = styled.div`
padding-left: 15px;
 & span{
  font-size: 32px;
 }

`;

export const TitleCardSaldo = styled.div`
width: 100%
`;


// DUMMY SERVER SALDO
export const SaldoCard = () => {
    const [saldo, setSaldo] = useState(0);
  
    useEffect(() => {
      // Realiza a requisição ao servidor dummy
      fetch('localhost:7000/api/saldo')
        .then((response) => response.json())
        .then((data) => setSaldo(data.saldo))
        .catch((error) => console.error('Erro ao buscar saldo:', error));
    }, []);
  
    return (
      <StyledSaldoCard>
        <TitleCardSaldo><h4>Saldo Disponível</h4></TitleCardSaldo>
        

        <span>{`R$ ${saldo.toFixed(2)}`}</span>
      </StyledSaldoCard>
    );
  };






export const ComponentSaldoVision = () => {
    return (
        <StyleBalanceVision>
            {/* Container principal CARD SALDO */}
                <SaldoCard/>
  
        </StyleBalanceVision>
    )
}

export const StyledBanner = styled.div`
width: 30%;
height: 130px;
border-radius: 8px;
background-color: white;
box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
padding-left: 15px;
 & span{
  font-size: 32px;
 }


`;


export const SecondBanner = () => {
  

  return (
    <StyledBanner>
      <div><h4>Receitas</h4></div>
      <span>R$ 1900,20</span>
    </StyledBanner>
  )
}



export const BannerThree = () => {
  return (
    <StyledBanner>
    <div><h4>Despesas</h4></div>
    <span>R$ 1900,20</span>
  </StyledBanner>
  )
}


export const ContainerSecondDashboard = styled.div`
width: 100%;
height: auto;
margin-top: 1rem;
`





