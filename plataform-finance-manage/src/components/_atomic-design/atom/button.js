import React from 'react';
import styled, { css } from 'styled-components';

// Estilo base do botão
const ButtonBase = styled.button`
  padding: 7px 70px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s, opacity 0.3s;

  // Efeito hover comum
  &:hover {
    opacity: 0.8;
  }

  // Estilos adicionais para botões
  ${(props) =>
    props.variant === 'default' &&
    css`
      background-color: #007BFF;
      color: white;

      &:hover {
        background-color: darkblue;
      }
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background-color: gray;
      color: white;

      &:hover {
        background-color: darkgray;
      }
    `}

  ${(props) =>
    props.variant === 'danger' &&
    css`
      background-color: red;
      color: white;

      &:hover {
        background-color: darkred;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: lightgray;
      cursor: not-allowed;
      opacity: 0.7;
    `}
`;

// Componente Button com diferentes variantes
const Button = ({ children, onClick, variant = 'primary', disabled = false }) => {
  return (
    <ButtonBase variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonBase>
  );
};

// Exportando o botão
export default Button;
