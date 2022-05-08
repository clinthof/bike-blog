import { ReactNode } from 'react';
import { HeaderContainer } from '../../containers/header';

type Props = {
  children: ReactNode,
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <HeaderContainer />
      <div className='page-content'>
        {children}
      </div>
    </>
  )
};

export default Layout;