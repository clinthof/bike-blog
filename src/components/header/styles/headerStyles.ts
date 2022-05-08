import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: blanchedalmond;
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 20px;
  justify-content: space-between;
`;

const Feature = styled.div`
  display: flex;
  flex-wrap: nowrap;
  cursor: pointer;
  width: fit-content;
  justify-content: center;
  align-items: center;
  margin-left: 8%;

  @media (max-width: 700px) {
    margin-left: 60px;
  }

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 6%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 40px;
  align-items: center;
  padding: 0;

  @media (max-width: 800px) {
    gap: 20px;
  }
`;

const Item = styled.li`
  border-radius: 20%;
  list-style-type: none;
  display: flex;
  cursor: pointer;
  font-size: 24px;
  padding: 30px;
  color: salmon;
  
  &:hover {
    background-color: rgb(243, 215, 199);
  }

  @media (max-width: 900px) {
    padding: 20px;
  }
`;

const Text = styled.h1`
  display: flex;
  box-sizing: border-box;
  font-size: 35px;
  font-style: italic;
  white-space: nowrap;
  height: fit-content;
  justify-content: space-between;
  color: white;
  text-shadow: -2px 1.75px pink, -4px 3px salmon, -6px 3.5px rgb(203, 97, 85);
  margin-right: 0.5em;

  @media (max-width: 650px) {
    display: none;
  }
`;

export {
  Container,
  Feature,
  Nav,
  List,
  Item,
  Text,
}