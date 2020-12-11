import AdministradorRouter from '../components/Admin/AdministradorRouter';
import ClienteRouter from '../components/Cliente/ClienteRouter';
import Login from '../components/Comunes/Login';
import CocineroRouter from '../components/Cocinero/CocineroRouter';
import BodegueroRouter from '../components/Bodeguero/BodegueroRouter';
import MeseroRouter from '../components/Mesero/MeseroRouter';
import FinanzasRouter from '../components/Finanzas/FinanzasRouter';
import TotemRouter from '../components/Totem/TotemRouter';
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
        path: '/finanzas',
        component: FinanzasRouter,
        exact: false
    },
    {
        path: '/mesero',
        component: MeseroRouter,
        exact: false
    },
    {
        path: '/totem',
        component: TotemRouter,
        exact: false
    },
    {
        path: '/',
        component: ClienteRouter,
        exact: false
    }
];

export default routes;