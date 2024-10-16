import React from 'react';
import styled, { css } from 'styled-components';

// Estilos base para os textos
const StyledText = styled.span`
  color: ${({ color }) => color || 'black'};
  margin: 0;
  ${({ size }) => {
    switch (size) {
      case 'h1':
        return css`
          font-size: 2em;
          font-weight: bold;
        `;
      case 'h2':
        return css`
          font-size: 1.5em;
          font-weight: bold;
        `;
      case 'p':
        return css`
          font-size: 1em;
        `;
      case 'span':
        return css`
          font-size: 0.875em;
        `;
      default:
        return css`
          font-size: 1em;
        `;
    }
  }}
`;

// Componente Text
const Text = ({ as = 'span', size, color, children, ...props }) => {
  return (
    <StyledText as={as} size={size} color={color} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
