export default loader => [{
        path: '/',
        name: 'home',
        component: () => loader('home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => loader('login'),
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => loader('signup'),
    },
    {
        path: '*',
        name: '404',
        component: () => loader('misc/404'),
    },
]