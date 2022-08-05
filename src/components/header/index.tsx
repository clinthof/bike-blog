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

const Header = (props: Props) => {
    return <Container {...props}></Container>;
};

Header.Feature = forwardRef(function HeaderFeature(props: Props, ref) {
  return <Feature {...props}></Feature>;
});

Header.Nav = function HeaderNav(props: Props) {
  return <Nav {...props}></Nav>;
};

Header.List = function HeaderList(props: Props) {
  return <List {...props}></List>;
};

Header.Item = forwardRef(function HeaderItem(props: Props, ref) {
  return <Item {...props}></Item>;
});

Header.Text = function HeaderText(props: Props) {
  return <Text {...props}></Text>;
};

export default Header;