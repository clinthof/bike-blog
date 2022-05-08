import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

interface Links {
    name: string;
    path: string;
    icon: JSX.Element;
}

const navLinks: Array<Links> = [
    {
        name: 'home',
        path: '/',
        icon: <HomeIcon className='nav-icon' />,
    },
    {
        name: 'posts',
        path: '/posts',
        icon: <ArticleIcon className='nav-icon' />,
    },
    {
        name: 'bikes',
        path: '/bikes',
        icon: <PedalBikeIcon className='nav-icon' />,
    },
];

export { navLinks };