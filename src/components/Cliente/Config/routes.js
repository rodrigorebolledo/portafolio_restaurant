import Reservar from '../Reservar';
import VerReservas from '../VerReservas';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';

const routes = [
    {
        path: '/reservar',
        component: Reservar,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/ver_reservas',
        component: VerReservas,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/',
        component: Inicio,
        exact: true,
        isPrivate: false,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },
];

export default routes;