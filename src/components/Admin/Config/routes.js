import Inicio from '../Inicio';
import Mesas from '../Mesas';
import Usuarios from '../Usuarios';
import Productos from '../Productos';

import Personas from '../Personas';
import Login from '../../Comunes/Login';
import Proveedores from '../Proveedores';
import PedidoProveedor from '../PedidoProveedor';
const routes = [
    {
        path: '/admin',
        component: Inicio,
        exact: true,
        isPrivate: true,
        name: 'Inicio'
    },
    {
        path: '/admin/productos',
        component: Productos,
        exact: true,
        isPrivate: true,
        name: 'Productos Proveedor'
    },

    {
        path: '/admin/usuarios',
        component: Usuarios,
        exact: true,
        isPrivate: true,
        name: 'Usuarios'
    },
    {
        path: '/admin/mesas',
        component: Mesas,
        exact: true,
        isPrivate: true,
        name: 'Mesas'
    },
    {
        path: '/admin/personas',
        component: Personas,
        exact: true,
        isPrivate: true,
        name: 'Personas'
    },
    {
        path: '/admin/proveedores',
        component: Proveedores,
        exact: true,
        isPrivate: true,
        name: 'Proveedores',
    },
    {
        path: '/admin/pedido_proveedor',
        component: PedidoProveedor,
        exact: true,
        isPrivate: true,
        name: 'Pedido'
    },


    {
        path: '/login',
        component: Login,
        exact: true,
        isPrivate: false,
    },

]

export default routes;