import Inicio from '../Inicio';
import Mesas from '../Mesas';
import Usuarios from '../Usuarios';
import Productos from '../Productos';
import GeneradorReportes from '../GeneradorReportes';
import ReportesHistoricos from '../ReportesHistoricos';
import Login from '../../Comunes/Login';
const routes = [
    {
        path: '/admin/reportes_historicos',
        component: ReportesHistoricos,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/generar_reportes',
        component: GeneradorReportes,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/usuarios',
        component: Usuarios,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin/mesas',
        component: Mesas,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/admin',
        component: Inicio,
        exact: true,
        isPrivate: true,
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },

]

export default routes;