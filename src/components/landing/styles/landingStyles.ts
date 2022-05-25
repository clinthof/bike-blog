import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 10px;
`;

const Title = styled.h1`
  height: fit-content;
  font-size: 100px;
  font-weight: bold;
  text-shadow: ${props => `-6px 4px ${props.theme.colors.indianRed}`};
  margin: 1 auto;
`;

const Splash = styled.div`
  display: flex;
  height: 100vh;
  width: auto;
  border: 2px solid blue;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  flex: 1;
  height: 100%;
`;

const APIContent = styled.div`
  background-color: black;
  display: flex;
  color: white;
  cursor: pointer;
  margin: 0 auto;
  box-sizing: border-box;
  height: 400px;
  width: 100%;
  max-width: 900px;
  border: 0;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

export {
  Container,
  Title,
  Splash,
  Inner,
  Column,
  APIContent,
}