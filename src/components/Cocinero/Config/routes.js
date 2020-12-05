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
        isPrivate: false,
        name: 'Inicio'
        
    },
    {
        path: '/cocinero/pedidos',
        component: Pedidos,
        exact: true,
        isPrivate: true,
        name: 'Pedidos',
    },
    {
        path: '/cocinero/platos',
        component: Platos,
        exact: true,
        isPrivate: true,
        name: 'Platos',
        
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
        isPrivate: false,
        name: 'Recetas',
       
    },
];

export default routes;