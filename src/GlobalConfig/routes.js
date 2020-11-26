import AdministradorRouter from '../components/Admin/AdministradorRouter';
import ClienteRouter from '../components/Cliente/ClienteRouter';
import Login from '../components/Comunes/Login';
import CocineroRouter from '../components/Cocinero/CocineroRouter';

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
    },
    {
        path:'/cocinero',
        component:CocineroRouter,
        exact: false
    }

];

export default routes;