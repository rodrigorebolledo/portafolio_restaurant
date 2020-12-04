import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



const routes = [
    {
        path: '/garzon',
        component: Inicio,
        exact: true,
        isPrivate: false,
        name: 'Inicio',
        needLogin: false,
        
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