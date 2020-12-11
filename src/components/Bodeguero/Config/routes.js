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
        needlogin: true,
              
    },
    {
        path: '/bodeguero/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
        name: 'Productos',
        needlogin: true,
        
        
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },   
];

export default routes;