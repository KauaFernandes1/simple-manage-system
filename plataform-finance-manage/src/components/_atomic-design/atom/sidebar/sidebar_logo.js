import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 50px;
`;

export const SidebarLogo = ({ imageSrc, title }) => (
  <LogoContainer>
    <LogoImage src={imageSrc} alt="Logo Empresa" />
    {title && <h1>{title}</h1>}
  </LogoContainer>
);
