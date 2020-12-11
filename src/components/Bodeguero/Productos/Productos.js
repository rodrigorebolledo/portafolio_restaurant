import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutBodeguero';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID', 'Nombre producto', 'Stock', 'Stock Mínimo', 'Unidad'];

//DEFAULT
const Productos = () => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreProducto, setNombreProducto] = useState('');
    const [stockProducto, setStockProducto] = useState(1);
    const [stockMinimo, setStockMinimo] = useState(0);
    const [unidad, setUnidad] = useState(1);
    const [apiMedida, setApiMedida] = useState([]);

    const INPUTS = [
        {
            label: 'Nombre del producto',
            type: 'text',
            placeholder: 'Ingrese el nombre del producto',
            column: 'nombreProducto',
            value: nombreProducto,
            setValue: setNombreProducto,
        },
        {
            label: 'Stock',
            type: 'number',
            min: 1,
            placeholder: 'Ingrese el stock del producto',
            column: 'stockProducto',
            value: stockProducto,
            setValue: setStockProducto,
        },
        {
            label: 'Stock Mínimo',
            type: 'number',
            min: 0,
            placeholder: 'Ingrese el stock mínimo del producto',
            column: 'stockMinimo',
            value: stockMinimo,
            setValue: setStockMinimo,
        },
        {
            label: 'Unidad de Medida',
            type: 'select-bd',
            column: 'unidad',
            subcolumn: 'idUnidadMedida',
            value: unidad,
            setValue: setUnidad,
            apiResult: apiMedida,
            idSelect: 'idUnidadMedida',
            nameSelect: 'nombreUnidadMedida'
        }
    ]


    const handleReset = _ => {
        setNombreProducto('');
        setStockProducto(1);
        setStockMinimo(0);
        setUnidad(1);
    }



    useEffect(() => {
        apiSetStateFromUrl("/api/productos", setProductos, setLoading);
        apiSetStateFromUrl("/api/unidades", setApiMedida);
        document.title = 'Bodeguero | Productos';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={productos} setItems={setProductos} header={header} title="Productos" inputs={INPUTS} url="/api/productos" nameId="idProducto" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Productos;