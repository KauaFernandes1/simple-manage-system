import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import imagen from '../../../images/image.png'
import { House, ChartPie, Users, Receipt, BellRinging, Barcode, Gear, Vault } from "phosphor-react";




// export const StyleSidebar = 


export const HomeSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Gerencia o estado do menu (aberto ou fechado)

  return (
    <div
    // ############ FUNCAO QUE FAZ A ABERTURA DO NAV
    className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}
    onMouseEnter={() => setIsOpen(true)} // Expande o menu quando o mouse passa TRUE
    onMouseLeave={() => setIsOpen(false)} // Fecha o menu quando o mouse sai FALSE
    
  >
    {/* Cabeçalho com logo */}
    <div className="sidebar-header">
      {/* Substitui o span com logo */}
      <span className="sidebar-logo">
        <img style={{width: '50px'}} src={imagen} alt="Logo Empresa" className="logo-image" />
      </span>
      {isOpen && <h1 className="sidebar-title">VINMA</h1>} {/* Ajusta para o nome da sua empresa */}
    </div>
    
    {/* Conteúdo do menu (personalizar conforme necessário) */}
    <div className="menu">
      <h2 className="menu-title">{isOpen && "MENU"}</h2>
      <Link to="/overview" className="menu-item active">
        <span className="menu-icon"><House size={24}/></span> {isOpen && "Home"}
      </Link>
      <Link to="/statistics" className="menu-item">
        <span className="menu-icon"><ChartPie size={24}/></span> {isOpen && "Metricas"}
      </Link>
      <Link to="/customers" className="menu-item">
        <span className="menu-icon"><Users size={24}/></span> {isOpen && "Compartilhar"}
      </Link>
      <Link to="/product" className="menu-item">
        <span className="menu-icon"><Receipt size={24}/></span> {isOpen && "Extratos"}
      </Link>
      <Link to="/messages" className="menu-item">
        <span className="menu-icon"><BellRinging size={24}/></span> {isOpen && "Lembretes"}
        {isOpen && <span className="message-count">13</span>}
      </Link>
      <Link to="/transactions" className="menu-item">
        <span className="menu-icon"><Barcode size={24}/></span> {isOpen && "Contas"}
      </Link>
    </div>

    {/* Seção Geral */}
    <div className="menu">
      <h2 className="menu-title">{isOpen && "GERAL"}</h2>
      <Link to="/settings" className="menu-item">
        <span className="menu-icon"><Gear size={24}/></span> {isOpen && "Configurações"}
      </Link>
      <Link to="/security" className="menu-item">
        <span className="menu-icon"><Vault size={24}/></span> {isOpen && "Cofre"}
      </Link>
    </div>
  </div>
  );
};

