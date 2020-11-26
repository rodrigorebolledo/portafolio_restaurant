import Reservar from '../Reservar';
import VerReservas from '../VerReservas';
import Inicio from '../Inicio';
import InicioAdmin from '../../Admin/Inicio';
import Login from '../../Comunes/Login';
import Pago from '../Pago';


const routes = [
    {
        path: '/',
        component: Inicio,
        exact: true,
        isPrivate: false,
        name: 'Inicio'
    },
    {
        path: '/reservar',
        component: Reservar,
        exact: true,
        isPrivate: true,
        name: 'Reservar',
    },
    {
        path: '/ver_reservas',
        component: VerReservas,
        exact: true,
        isPrivate: true,
        name: 'Ver Reservas',
    },

    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },


    {
        path: '/pago',
        component: Pago,
        exact: true,
        isPrivate: false,
        name: 'Pago',
    },
];

export default routes;