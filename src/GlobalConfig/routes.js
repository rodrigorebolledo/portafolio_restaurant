import AdministradorRouter from '../components/Admin/AdministradorRouter';
import ClienteRouter from '../components/Cliente/ClienteRouter';
import Login from '../components/Comunes/Login';
import CocineroRouter from '../components/Cocinero/CocineroRouter';
import BodegueroRouter from '../components/Bodeguero/BodegueroRouter';

const routes = [
    {
        path: '/admin',
        component: AdministradorRouter,
        exact: false
    },
    {
        path: '/login',
        component: Login,
        exact: false
    },
    {
        path: '/cocinero',
        component: CocineroRouter,
        exact: false
    },
    {
        path: '/bodeguero',
        component: BodegueroRouter,
        exact: false
    },
    {
        path: '/',
        component: ClienteRouter,
        exact: false
    }
];

export default routes;