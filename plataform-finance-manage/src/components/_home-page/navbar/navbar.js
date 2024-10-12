import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imagen from '../../../images/image.png';
import { House, ChartPie, Users, Receipt, BellRinging, Barcode, Gear, Vault } from 'phosphor-react';
import styled from 'styled-components';

const Sidebar = styled.div`
  height: 100vh;
  background-color: #ffffff;
  border: 1px solid rgb(218, 218, 218);
  color: rgb(25, 25, 25);
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: fixed;
  transition: width 0.5s ease;
  border-radius: 0px 24px 0px 0px;
  width: ${(props) => (props.isOpen ? '250px' : '60px')};
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const SidebarLogo = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const SidebarTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const MenuTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 14px;
  color: rgb(25, 25, 25);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: rgb(25, 25, 25);
  padding: 10px 15px;
  border-radius: 8px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #007aff;
    color: white;
  }
`;

const MenuIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const MessageCount = styled.span`
  background-color: #a6e22d;
  color: black;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
`;

export const HomeSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Gerencia o estado do menu (aberto ou fechado)

  return (
    <Sidebar
      isOpen={isOpen}
      onMouseEnter={() => setIsOpen(true)} // Expande o menu quando o mouse passa TRUE
      onMouseLeave={() => setIsOpen(false)} // Fecha o menu quando o mouse sai FALSE
    >
      {/* Cabeçalho com logo */}
      <SidebarHeader>
        <SidebarLogo>
          <img style={{ width: '50px' }} src={imagen} alt="Logo Empresa" />
        </SidebarLogo>
        <SidebarTitle isOpen={isOpen}>VINMA</SidebarTitle>
      </SidebarHeader>

      {/* Menu de Navegação */}
      <Menu>
        <MenuTitle isOpen={isOpen}>MENU</MenuTitle>
        <MenuItem to="/home">
          <MenuIcon>
            <House size={24} />
          </MenuIcon>
          {isOpen && 'Home'}
        </MenuItem>
        <MenuItem to="home/metricas">
          <MenuIcon>
            <ChartPie size={24} />
          </MenuIcon>
          {isOpen && 'Metricas'}
        </MenuItem>
        <MenuItem to="home/compartilhar">
          <MenuIcon>
            <Users size={24} />
          </MenuIcon>
          {isOpen && 'Compartilhar'}
        </MenuItem>
        <MenuItem to="home/extratos">
          <MenuIcon>
            <Receipt size={24} />
          </MenuIcon>
          {isOpen && 'Extratos'}
        </MenuItem>
        <MenuItem to="home/lembretes">
          <MenuIcon>
            <BellRinging size={24} />
          </MenuIcon>
          {isOpen && 'Lembretes'}
          {isOpen && <MessageCount>13</MessageCount>}
        </MenuItem>
        <MenuItem to="home/contas">
          <MenuIcon>
            <Barcode size={24} />
          </MenuIcon>
          {isOpen && 'Contas'}
        </MenuItem>
      </Menu>

      {/* Seção Geral */}
      <Menu>
        <MenuTitle isOpen={isOpen}>GERAL</MenuTitle>
        <MenuItem to="/configuraçoes">
          <MenuIcon>
            <Gear size={24} />
          </MenuIcon>
          {isOpen && 'Configurações'}
        </MenuItem>
        <MenuItem to="/security">
          <MenuIcon>
            <Vault size={24} />
          </MenuIcon>
          {isOpen && 'Cofre'}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
