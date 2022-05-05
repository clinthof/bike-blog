import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: blanchedalmond;
  width: 100%;
  height: 120px;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
`;

const Feature = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 350px;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.li`
  display: flex;
  cursor: pointer;
`;

const Text = styled.p`
  display: flex;
  font-size: 200%;
  white-space: nowrap;
  height: fit-content;
  width: 60%;
  justify-content: space-between;

  @media (max-width: 400px) {
    font-size: 80%;
    width: fit-content;
  }
`;

export {
  Container,
  Feature,
  Nav,
  Item,
  Text,
}