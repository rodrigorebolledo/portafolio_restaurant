import SolicitarMesa from '../SolicitarMesa';
import Login from '../../Comunes/Login';
const routes = [
    {
        path: '/totem',
        component: SolicitarMesa,
        exact: true,
        isPrivate: false,
        name: 'Totem'
    },

    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },

]

export default routes;