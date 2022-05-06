import styled from 'styled-components';
interface ContainerProps {
  readonly collapse: boolean;
}

const Container = styled.div<ContainerProps>`
  box-shadow: ${({ collapse }) => collapse && '0 40px 200px rgba(0,0,0,0.9) inset'};
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
  margin-left: 100px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
`;

const Item = styled.li`
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
    padding: 22px;
  }
`;

const Text = styled.h1`
  display: flex;
  box-sizing: border-box;
  font-size: 200%;
  font-style: italic;
  white-space: nowrap;
  height: fit-content;
  justify-content: space-between;
  color: white;
  text-shadow: -2px 2px pink, -4px 3px salmon, -6px 3.5px rgb(203, 97, 85);
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