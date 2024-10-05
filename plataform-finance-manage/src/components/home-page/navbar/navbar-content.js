import styled from 'styled-components'
import {HomeSidebar} from './navbar.js'


export const Sidebar = styled.div`
width: 100px; /* Largura da Sidebar */
background: transparent; /* Cor de fundo da sidebar */
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0px;
`;


export const SidebarComponent = () => {
    <Sidebar>
    <HomeSidebar/>
  </Sidebar>
}