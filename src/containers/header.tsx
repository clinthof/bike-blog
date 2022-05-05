import { Header } from '../components';
import { navLinks } from '../utils/data';
import Link from 'next/link';
import BoltIcon from '@mui/icons-material/Bolt';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

const HeaderContainer = () => {
  return (
    <>
      <Header>
        <PedalBikeIcon className='mui-svg-icon logo' />
        <Header.Feature>
          <Header.Text>
            BIKE BLOG
            <BoltIcon className='mui-svg-icon' />
          </Header.Text>
        </Header.Feature>
        <Header.Nav>
          {navLinks.map((link, index) => (
            <ul key={index}>
              <Link href={link.path} passHref>
                <Header.Item key={index}>
                  {link.name}
                </Header.Item>
              </Link>
            </ul>
          ))}
        </Header.Nav>
      </Header>
    </>
  );
};

export { HeaderContainer };