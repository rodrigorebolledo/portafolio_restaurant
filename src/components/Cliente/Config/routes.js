import Reservar from '../Reservar';
import VerReservas from '../VerReservas';
import Inicio from '../Inicio';

const routes = [
    {
        path:'/reservar',
        component: Reservar,
        exact: true
    },
    {
        path:'/ver_reservas',
        component: VerReservas,
        exact: true
    },
    {
        path:'/',
        component: Inicio,
        exact: true
    },
];

export default routes;