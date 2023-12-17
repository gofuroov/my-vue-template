const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue'),
        meta: {
            title: "Bosh sahifa",
            requiresAuth: false,
            layout: 'main'
        }
    },
    {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/test/page1.vue'),
        meta: {
            title: "Page1",
            requiresAuth: false,
            layout: 'main'
        }
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import('@/views/test/page2.vue'),
        meta: {
            requiresAuth: false,
            layout: 'main'
        }
    },
    {
        path: '/page3',
        name: 'page3',
        component: () => import('@/views/test/page3.vue'),
        meta: {
            requiresAuth: false,
            layout: 'main'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/login.vue'),
        meta: {
            requiresAuth: false,
            layout: 'default'
        }
    },
    {
        name: 'not-found',
        path: '/:path*',
        component: () => import('../views/error.vue'),
        meta: {
            title: 'Oh no!'
        }
    }
]

export default routes
