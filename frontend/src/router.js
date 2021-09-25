import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login'
import Dashboard from '@/views/Dashboard';
import Usuarios from '@/views/Usuarios';
import Productos from '@/views/Productos'
import Error from '@/views/Error404';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard,
        },
        {
            path: '/usuarios',
            name: 'Usuarios',
            component: Usuarios,
        },
        {
            path: '/productos',
            name: 'Productos',
            component: Productos,
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
})