import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 10px;
  border: 2px solid red;
`;

const Title = styled.h1`
  box-sizing: border-box;
  font-size: 100px;
  font-weight: bold;
  text-shadow: ${props => `-6px 4px ${props.theme.colors.indianRed}`};
  margin: 0;
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
  border: 2px solid blue;
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
  Inner,
  Column,
  APIContent,
}