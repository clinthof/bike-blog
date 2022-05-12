import { ReactNode, forwardRef, } from 'react';
import { 
  Container, 
  Feature,
  Nav, 
  List,
  Item,
  Text,
} from './styles/headerStyles';
 
export interface Props {
  children: ReactNode;
};

const Header = ({ children, ...restProps }: Props) => {
    return <Container {...restProps}>{children}</Container>;
};

Header.Feature = forwardRef(function HeaderFeature({ children, ...restProps }: Props, ref) {
  return <Feature {...restProps}>{children}</Feature>;
});

Header.Nav = function HeaderNav({ children, ...restProps }: Props) {
  return <Nav {...restProps}>{children}</Nav>;
};

Header.List = function HeaderList({ children, ...restProps }: Props) {
  return <List {...restProps}>{children}</List>;
};

Header.Item = forwardRef(function HeaderItem({ children, ...restProps }: Props, ref) {
  return <Item {...restProps}>{children}</Item>;
});

Header.Text = function HeaderText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>;
};

export default Header;