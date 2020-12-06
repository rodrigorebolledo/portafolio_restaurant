import Inicio from '../Inicio';
import Login from '../../Comunes/Login';
import Ordenes from '../Ordenes';



const routes = [
    {
        path: '/mesero',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio'

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