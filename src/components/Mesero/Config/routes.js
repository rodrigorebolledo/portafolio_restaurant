import Inicio from '../Inicio';
import Login from '../../Comunes/Login';
import Ordenes from '../Ordenes';
import Orden from '../Orden'



const routes = [
    {
        path: '/mesero',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio'

    },
    {
        path: '/mesero/orden',
        component: Orden,
        exact: true,
        isPrivate: true,
        name: 'Realizar Orden',
        needLogin: true,
    },
    {
        path: '/mesero/ordenes',
        component: Ordenes,
        exact: true,
        isPrivate: true,
        name: 'Ordenes'

    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },


];

export default routes;