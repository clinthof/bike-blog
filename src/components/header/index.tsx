import { ReactNode, forwardRef, } from 'react';
import { 
  Container, 
  Feature,
  Nav, 
  List,
  Item,
  Text,
 } from './styles/headerStyles';

const Header = (
    {
        children,
        collapse = false,
        ...restProps }: { children: ReactNode, collapse: boolean }) =>
{
    return <Container {...restProps}>{children}</Container>;
};

Header.Feature = forwardRef(function HeaderFeature({ children, ...restProps }: { children: ReactNode }, ref) {
  return <Feature {...restProps}>{children}</Feature>;
});

Header.Nav = function HeaderNav({ children, ...restProps }: { children: ReactNode }) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.List = function HeaderList({ children, ...restProps }: { children: ReactNode }) {
  return <List {...restProps}>{children}</List>;
};

Header.Item = forwardRef(function HeaderItem({ children, ...restProps }: { children: ReactNode }, ref) {
  return <Item {...restProps}>{children}</Item>;
});

Header.Text = function HeaderText({ children, ...restProps }: { children: ReactNode }) {
  return <Text {...restProps}>{children}</Text>;
};

export default Header;