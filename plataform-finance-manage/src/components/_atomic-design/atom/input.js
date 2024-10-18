// components/atoms/Input.js
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 400px;
  height: 35px;
  background-color: #ececec;
  margin-bottom: 32px;
  border: none;
  border-radius: 8px;
  outline: none;
  padding-left: 12px;
`;

const Input = ({ placeholder }) => {
  return <StyledInput placeholder={placeholder} />;
};

export default Input;
