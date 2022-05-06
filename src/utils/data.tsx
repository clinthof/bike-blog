interface Links {
    name: string;
    path: string;
}

const navLinks: Array<Links> = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'posts',
        path: '/posts',
    },
    {
        name: 'bikes',
        path: '/bikes',
    },
];

export { navLinks };