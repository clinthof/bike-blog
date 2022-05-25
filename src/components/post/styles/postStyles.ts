import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  box-sizing: border border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 40px;
  gap: 40px;
`;

const InfoContainer = styled.div`
  border: 0;
  border-radius: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StatsContainer = styled.div`
  display: none;
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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.blanchedAlmond};
  color: black;
  cursor: pointer;
  margin: 0 auto;
  box-sizing: border-box;
  height: 280px;
  width: 100%;
  max-height: 300px;
  max-width: 600px;
  border: 0;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  transition: transform .2s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => `-6px 8px ${props.theme.colors.indianRed}`};

    ${InfoContainer} {
      display: none; // this will come in handy later ;)
    }
  }

  &:last-child {
    margin-bottom: 0px;
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
  Wrapper,
  Card,
  StatsContainer,
  InfoContainer,
  Title,
  Excerpt,
};