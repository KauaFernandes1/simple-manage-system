import styled from 'styled-components';
import { colors } from '../../../_atomic-design/_librarys/colors.js';

// Definindo os estilos via Styled Components
const CardContainer = styled.div`
  display: flex;
  align-items: center; /* Alinhar verticalmente */
  justify-content: flex-start; /* Alinhar conteúdo à esquerda */
  border-radius: 8px; /* Bordas arredondadas */
  box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.08);
  background-color: ${colors.primaryBg}; /* Usando a cor de fundo primária da biblioteca */
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  flex: 1; /* Tamanho flexível para a imagem */
`;

const Image = styled.img`
  width: auto;
  height: 120px;
  padding: 20px;
  object-fit: cover; /* Ajustar a imagem */
  border-radius: 8px; /* Borda arredondada para a imagem */
`;

const ContentContainer = styled.div`
  flex: 2; /* Tamanho flexível para o conteúdo */
  margin-left: 0px; /* Espaçamento entre a imagem e o texto */
`;

const Title = styled.h2`
  font-size: 18px;
  color: ${colors.primaryText}; /* Usando a cor de texto primária da biblioteca */
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${colors.secondaryText}; /* Usando a cor de texto secundária da biblioteca */
  margin-bottom: 15px;
`;

const Button = styled.button`
  width: 200px;
  height: 35px;
  font-size: 14px;
  color: ${colors.primaryButtonText}; /* Usando a cor de texto do botão primário */
  background-color: ${colors.primaryButtonBg}; /* Usando a cor de fundo do botão primário */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.secondaryDetails}; /* Usando cor dos detalhes ao passar o mouse */
    color: #E6E6E6;
  }
`;

export const CardComponent = () => {
  return (
    <CardContainer>
      {/* Área para a ilustração */}
      <ImageContainer>
        <Image src={require('./image.png')} alt="Ilustração" />
      </ImageContainer>

      {/* Área para o título, subtítulo e botão */}
      <ContentContainer>
        <Title>Título do Card</Title>
        <Subtitle>Esse é um subtítulo descritivo para o card.</Subtitle>
        <Button>Clique Aqui</Button>
      </ContentContainer>
    </CardContainer>
  );
};

export default CardComponent;
