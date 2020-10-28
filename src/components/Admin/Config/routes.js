import Inicio from '../Inicio';
import Mesas from '../Mesas';
import Usuarios from '../Usuarios';
import Productos from '../Productos';
import GeneradorReportes from '../GeneradorReportes';
import ReportesHistoricos from '../ReportesHistoricos';

const routes = [
    {
        path: '/admin/reportes_historicos',
        component: ReportesHistoricos,
        exact: true
    },
    {
        path: '/admin/generar_reportes',
        component: GeneradorReportes,
        exact: true
    },
    {
        path: '/admin/productos',
        component: Productos,
        exact: true
    },
    {
        path: '/admin/usuarios',
        component: Usuarios,
        exact: true
    },
    {
        path: '/admin/mesas',
        component: Mesas,
        exact: true
    },
    {
        path: '/admin',
        component: Inicio,
        exact: true
    }
]

export default routes;