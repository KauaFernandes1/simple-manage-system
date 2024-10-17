import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarLogo } from '../atom/sidebar/sidebar_logo';
import { MenuItem } from '../molecules/sidebar-item';
import { House, ChartPie, Users, Receipt, BellRinging, Barcode, Gear, Vault } from "phosphor-react";
import imagen from '../../../images/image.png';

const SidebarContainer = styled.div`
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
  width: ${({ isOpen }) => (isOpen ? '250px' : '60px')};
`;

const MenuTitle = styled.h2`
  margin-bottom: 15px;
  font-size: 14px;
  color: rgb(25, 25, 25);
`;

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContainer
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      isOpen={isOpen}
    >
      <SidebarLogo imageSrc={imagen} title={isOpen ? "VINMA" : null} />
      
      <div className="menu">
        <MenuTitle>{isOpen && "MENU"}</MenuTitle>
        <MenuItem to="/home" icon={<House size={24} />}>{isOpen && "Home"}</MenuItem>
        <MenuItem to="/home/metricas" icon={<ChartPie size={24} />}>{isOpen && "Metricas"}</MenuItem>
        <MenuItem to="/home/compartilhar" icon={<Users size={24} />}>{isOpen && "Compartilhar"}</MenuItem>
        <MenuItem to="/home/extratos" icon={<Receipt size={24} />}>{isOpen && "Extratos"}</MenuItem>
        <MenuItem to="/home/lembretes" icon={<BellRinging size={24} />}>
          {isOpen && "Lembretes"} {isOpen && <span className="message-count"></span>}
        </MenuItem>
        <MenuItem to="/home/contas" icon={<Barcode size={24} />}>{isOpen && "Contas"}</MenuItem>
      </div>

      <div className="menu">
        <MenuTitle>{isOpen && "GERAL"}</MenuTitle>
        <MenuItem to="/home/configurações" icon={<Gear size={24} />}>{isOpen && "Configurações"}</MenuItem>
        <MenuItem to="/home/cofre" icon={<Vault size={24} />}>{isOpen && "Cofre"}</MenuItem>
      </div>
    </SidebarContainer>
  );
};
