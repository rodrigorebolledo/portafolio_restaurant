import AdministradorRouter from '../components/Admin/AdministradorRouter';
import ClienteRouter from '../components/Cliente/ClienteRouter';
import Login from '../components/Comunes/Login';

const routes = [
    {
        path:'/admin',
        component:AdministradorRouter,
        exact: false
    },
    {
        path:'/login',
        component:Login,
        exact: false
    },
    {
        path:'/',
        component:ClienteRouter,
        exact: false
    }
];

export default routes;