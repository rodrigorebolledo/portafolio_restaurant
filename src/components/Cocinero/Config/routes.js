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
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },
    
    
];
export default routes;