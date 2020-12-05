import Reservar from '../Reservar';
import VerReservas from '../VerReservas';
import Inicio from '../Inicio';
import InicioAdmin from '../../Admin/Inicio';
import Login from '../../Comunes/Login';
import Orden from '../Orden';


const routes = [
    {
        path: '/',
        component: Inicio,
        exact: true,
        isPrivate: false,
        name: 'Inicio',
        needLogin: false,
    },
    {
        path: '/reservar',
        component: Reservar,
        exact: true,
        isPrivate: true,
        needLogin: false,
        name: 'Reservar',
    },
    {
        path: '/ver_reservas',
        component: VerReservas,
        exact: true,
        isPrivate: true,
        name: 'Ver Reservas',
        needLogin: true,
    },

    {
        path: '/login',
        component: Login,
        exact: true,
        needLogin: false,
        isPrivate: false,
    },


    {
        path: '/orden',
        component: Orden,
        exact: true,
        isPrivate: false,
        name: 'Realizar Orden',
        needLogin: true,
    },
];

export default routes;