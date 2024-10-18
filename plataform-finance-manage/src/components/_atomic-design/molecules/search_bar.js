// components/molecules/SearchBar.js
import styled from 'styled-components';
import Input from '../atom/input';

const Container = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const SearchBar = () => {
  return (
    <Container>
      <Input placeholder="Procurar" />
    </Container>
  );
};

export default SearchBar;
