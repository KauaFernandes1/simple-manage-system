import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {MenuIcon} from '../atom/sidebar/menu-icone'

const Item = styled(Link)`
  text-decoration: none;
  color: rgb(25, 25, 25);
  padding: 10px 15px;
  border-radius: 8px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  
  &:hover {
    background-color: #007AFF;
    color: white;
    transition: background-color 0.5s ease;
  }
`;

export const MenuItem = ({ to, icon, children }) => (
  <Item to={to}>
    <MenuIcon>{icon}</MenuIcon>
    {children}
  </Item>
);
