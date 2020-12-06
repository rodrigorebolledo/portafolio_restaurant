import Pedidos from '../Pedidos';
import Platos from '../Platos';
import Recetas from '../Recetas';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



const routes = [
    {
        path: '/cocinero',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio',
        needlogin: true,

    },
    {
        path: '/cocinero/pedidos',
        component: Pedidos,
        exact: true,
        isPrivate: true,
        name: 'Pedidos',
        needlogin: true,
    },
    {
        path: '/cocinero/platos',
        component: Platos,
        exact: true,
        isPrivate: true,
        name: 'Platos',
        needlogin: true,

    },

    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },


    {
        path: '/cocinero/recetas',
        component: Recetas,
        exact: true,
        isPrivate: true,
        name: 'Recetas',

    },
];

export default routes;