import { useState, useEffect, } from 'react';
import { Header } from '../components';
import { navLinks } from '../utils/data';
import Link from 'next/link';
import BoltIcon from '@mui/icons-material/Bolt';

const HeaderContainer = () => {
  return (
    <>
      <Header>
        <Link href='/' passHref>
          <Header.Feature>
            <Header.Text>The Bike Blog</Header.Text>
            <BoltIcon className='mui-svg-icon' id='bolt-icon' />
          </Header.Feature>
        </Link>
        <Header.Nav>
          <Header.List>
            {navLinks.map((link, index) => (
                <Link key={index} href={link.path} passHref>
                  <Header.Item>
                    {link.icon}
                  </Header.Item>
                </Link>
            ))}
          </Header.List>
        </Header.Nav>
      </Header>
    </>
  );
};

export { HeaderContainer };