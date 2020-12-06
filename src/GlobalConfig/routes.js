import AdministradorRouter from '../components/Admin/AdministradorRouter';
import ClienteRouter from '../components/Cliente/ClienteRouter';
import Login from '../components/Comunes/Login';
import CocineroRouter from '../components/Cocinero/CocineroRouter';
import BodegueroRouter from '../components/Bodeguero/BodegueroRouter';
import GarzonRouter from '../components/Garzon/GarzonRouter';
import FinanzasRouter from '../components/Finanzas/FinanzasRouter';

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
        path: '/cocinero/platos',
        component: CocineroRouter,
        exact: false
    },
    {
        path: '/bodeguero',
        component: BodegueroRouter,
        exact: false
    },
    {
        path: '/garzon',
        component: GarzonRouter,
        exact: false
    },
    {
        path: '/finanzas',
        component: FinanzasRouter,
        exact: false
    },
    {
        path: '/',
        component: ClienteRouter,
        exact: false
    }
];

export default routes;