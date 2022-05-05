import type { NextPage } from 'next';
import { HeaderContainer } from '../src/containers/header';

const Home: NextPage = () => {
  return (
    <div>    
      <HeaderContainer />
      Blog homepage
    </div>
  )
}

export default Home
