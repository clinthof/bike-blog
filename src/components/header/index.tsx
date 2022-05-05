import { ReactNode, forwardRef } from 'react';
import { 
  Container, 
  Feature,
  Nav, 
  Item,
  Text,
 } from './styles/headerStyles';

const Header = ({ children, ...restProps }: {children: ReactNode}) => {
  return <Container {...restProps}>{children}</Container>
};

Header.Feature = function HeaderFeature({ children, ...restProps }: { children: ReactNode }) {
  return <Feature {...restProps}>{children}</Feature>;
};

Header.Nav = function HeaderNav({ children, ...restProps }: { children: ReactNode }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.Item = forwardRef(function HeaderItem({ children, ...restProps }: { children: ReactNode }, ref) {
  return <Item {...restProps}>{children}</Item>;
});

Header.Text = function HeaderText({ children, ...restProps }: { children: ReactNode }) {
  return <Text {...restProps}>{children}</Text>;
};

export default Header;