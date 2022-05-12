import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.blanchedAlmond};
  color: black;
  cursor: pointer;
  margin: 0 auto;
  box-sizing: border-box;
  height: 400px;
  width: 75%;
  max-width: 900px;
  border: 0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  transition: transform .2s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => `-6px 8px ${props.theme.colors.indianRed}`};
  }

  &:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: 650px) {
    width: 100%;
    height: 280px;
    flex-direction: column;
  }
`;

const StatsContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid red;
  border-radius: 0 10px 10px 0;
  width: 25%;
  font-size: 16px;

  @media (max-width: 650px) {
    width: 100%;
    border-radius: 0 0 10px 10px;
  }
`;

const InfoContainer = styled.div`
  border: 0;
  border-radius: 10px 0 0 10px;
  background-color: white;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    padding-left: 10px;
  }

  @media (max-width: 650px) {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  
  @media (max-width: 650px) {
    font-size: 20px;
  }
`;

const Excerpt = styled.p`
  font-size: 20px;
  margin: 0;
`;

export {
  Card,
  StatsContainer,
  InfoContainer,
  Title,
  Excerpt,
};