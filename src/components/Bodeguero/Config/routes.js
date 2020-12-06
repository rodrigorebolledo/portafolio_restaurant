import Pedidos from '../Pedidos';
import Productos from '../Productos';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



const routes = [
    {
        path: '/bodeguero',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio',
    },
    {
        path: '/bodeguero/pedidos',
        component: Pedidos,
        exact: true,
        isPrivate: true,
        name: 'Pedidos',

    },
    {
        path: '/bodeguero/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
        name: 'Productos',


    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },
];

export default routes;