import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../Layout/Layout';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID', 'Valor del producto', 'Proveedor', 'Producto'];

//DEFAULT
const ProductosProveedor = () => {

    const [provProd, setProvProd] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreProducto, setNombreProducto] = useState(1);
    const [valorProducto, setValorProducto] = useState(1500);
    const [proveedor, setProveedor] = useState(1);
    const [apiProducto, setApiProducto] = useState([]);
    const [apiProveedor, setApiProveedor] = useState([]);

    const INPUTS = [
        {
            label: 'Nombre del producto',
            type: 'select-bd',
            placeholder: 'Seleccione el nombre del producto',
            column: 'producto',
            subcolumn: 'idProducto',
            value: nombreProducto,
            setValue: setNombreProducto,
            apiResult: apiProducto,
            idSelect: 'idProducto',
            nameSelect: 'nombreProducto'
        },
        {
            label: 'Valor Producto',
            type: 'number',
            min: 1,
            placeholder: 'Ingrese el valor del producto',
            column: 'valorProducto',
            value: valorProducto,
            setValue: setValorProducto,
        },
        {
            label: 'Nombre Proveedor',
            type: 'select-bd',
            column: 'proveedor',
            subcolumn: 'idProveedor',
            value: proveedor,
            setValue: setProveedor,
            apiResult: apiProveedor,
            idSelect: 'idProveedor',
            nameSelect: 'nombreProveedor'

        }
    ]


    const handleReset = _ => {
        setNombreProducto(1);
        setValorProducto(1500);
        setProveedor(1);
    }



    useEffect(() => {

        apiSetStateFromUrl("/api/proveedorproductos/", setProvProd, setLoading);
        apiSetStateFromUrl("/api/proveedores/", setApiProveedor);
        apiSetStateFromUrl("api/productos/", setApiProducto);

        document.title = 'Admin | Productos';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={provProd} setItems={setProvProd} header={header} title="Productos de Proveedor" inputs={INPUTS} url="/api/proveedorproductos" nameId="idProvProd" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} eliminar={false}  /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default ProductosProveedor;