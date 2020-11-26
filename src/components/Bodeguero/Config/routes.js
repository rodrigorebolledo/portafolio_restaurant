import Pedidos from '../Productos';
import Recetas from '../Pedidos';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';
import Productos from '../Productos';



const routes = [
    {
        path: '/bodeguero',
        component: Inicio,
        exact: true,
        isPrivate: false,
        name: 'Inicio',
        needLogin: false,
        
    },
    {
        path: '/bodeguero/pedidos',
        component: Pedidos,
        exact: true,
        isPrivate: true,
        name: 'Pedidos',
        needLogin: true,
    },
    {
        path: '/bodeguero/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
        name: 'Productos',
        needLogin: true,
        
    },

    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
        needLogin: false,
    },


    {
        path: '/cocinero/recetas',
        component: Recetas,
        exact: true,
        isPrivate: false,
        name: 'Recetas',
        needLogin: true,
       
    },
];

export default routes;