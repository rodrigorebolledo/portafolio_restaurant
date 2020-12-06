import Reportes from '../Reportes';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



const routes = [
    {
        path: '/finanzas',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio'

    },
    {
        path: '/finanzas/reportes',
        component: Reportes,
        exact: true,
        isPrivate: true,
        name: 'Reportes',
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },

];

export default routes;