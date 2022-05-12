import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PedalBikeIcon from '@mui/icons-material/PedalBike';

interface Links {
    name: string;
    path: string;
    icon: JSX.Element;
}

interface Posts {
    title: string;
    excerpt: string;
    content: string;
    stats: {
        distance: string;
        time: string;
        speed: string;
        watts: string;
    };
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

const fakePosts: Array<Posts> = [
    {
        title: 'Post 1',
        excerpt: 'This is the first post.',
        content: 'Welcome to the first post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 1',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
    {
        title: 'Post 2',
        excerpt: 'This is the next post.',
        content: 'Welcome to the next post. It is not a real post, but here it is.',
        stats: {
            distance: '',
            time: '',
            speed: '',
            watts: '',
        },
    },
]

export { navLinks, fakePosts, };