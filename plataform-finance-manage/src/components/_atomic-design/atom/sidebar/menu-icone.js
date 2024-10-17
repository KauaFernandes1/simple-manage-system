import styled from 'styled-components';

const IconContainer = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export const MenuIcon = ({ children }) => (
  <IconContainer>{children}</IconContainer>
);
