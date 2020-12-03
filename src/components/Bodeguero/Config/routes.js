import Pedidos from '../Pedidos';
import Productos from '../Productos';
import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



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
        needLogin: true,
        name: 'Pedidos',
        
    },
    {
        path: '/bodeguero/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
        needLogin: true,
        name: 'Productos',
        
        
    },

    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
        needLogin: false,
    },


    
];

export default routes;