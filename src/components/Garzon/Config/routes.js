import Inicio from '../Inicio';
import Login from '../../Comunes/Login';



const routes = [
    {
        path: '/garzon',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio',
        needLogin: true,

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