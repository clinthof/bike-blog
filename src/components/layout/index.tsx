import { ReactNode } from 'react';
import { HeaderContainer } from '../../containers/header';
import Theme from '../../../styles/Theme';

type Props = {
  children: ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <Theme>
      <HeaderContainer />
      <div>
        {children}
      </div>
    </Theme>
  )
};

export default Layout;