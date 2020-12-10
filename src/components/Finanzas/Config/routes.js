import Inicio from '../Inicio';
import ReportesPlatos from '../ReportePlatos';
import ReporteStock from '../ReporteStock';
import ReporteProveedores from '../ReporteProveedores';
import Login from '../../Comunes/Login';
import ReporteReserva from '../ReporteReservas';
import ReporteIngresos from '../ReporteIngreso';
import ReporteEgresos from '../ReporteEgresos';



const routes = [
    {
        path: '/finanzas',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio'

    },
    {
        path: '/finanzas/reportes_plato',
        component: ReportesPlatos,
        exact: true,
        isPrivate: true,
        name: 'Reporte plato',
    },
    {
        path: '/finanzas/reportes_stock',
        component: ReporteStock,
        exact: true,
        isPrivate: true,
        name: 'Reporte stock',
    },
    {
        path: '/finanzas/reportes_reservas',
        component: ReporteReserva,
        exact: true,
        isPrivate: true,
        name: 'Reporte reserva',
    },
    {
        path: '/finanzas/reportes_proveedores',
        component: ReporteProveedores,
        exact: true,
        isPrivate: true,
        name: 'Reporte proveedores',
    },
    {
        path: '/finanzas/reportes_ingreso',
        component: ReporteIngresos,
        exact: true,
        isPrivate: true,
        name: 'Reporte ingresos',
    },
    {
        path: '/finanzas/reportes_egreso',
        component: ReporteEgresos,
        exact: true,
        isPrivate: true,
        name: 'Reporte egresos',
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },

];

export default routes;