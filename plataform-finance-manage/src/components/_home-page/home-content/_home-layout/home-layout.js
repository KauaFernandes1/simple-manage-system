import styled from 'styled-components'


export const Container = styled.div`
display: flex; /* Torna o container principal flexível */
height: 100vh; /* Ocupa a altura total da tela */
`;

export const Sidebar = styled.div`
width: 100px; /* Largura da Sidebar */
background: transparent; /* Cor de fundo da sidebar */
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0px;
`;

export const Content = styled.div`
flex: 1; /* Ocupar o restante do espaço */
background: linear-gradient(to right, #ffffff, #ffffff); /* Background da parte vermelha */
padding: 20px;
`;