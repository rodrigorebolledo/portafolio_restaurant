import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutFinanzas/Layout';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';

//DEFAULT
const ReporteStock = () => {

    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreProducto, setNombreProducto] = useState('');
    const [stock, setStock] = useState(1);
    const [unidad, setUnidad] = useState('');
    

    const HEADER = ['Nombre del producto', 'stock',  'Unidad de medida'];
    const EXCEPTO = ['stockMinimo']
    const INPUTS = [
        {
            label: 'Nombre del producto',
            type: 'text',
            placeholder: 'Nombre del Producto',
            column: 'nombreProducto',
            value: nombreProducto,
            setValue: setNombreProducto,
            
        },
        {
            label: 'stock',
            type: 'number',
            min: 1,
            placeholder: 'Stock de productos',
            column: 'stockProducto',
            value: stock,
            setValue: setStock,
        },
        {
            label: 'Unidad de medida',
            type: 'text',
            column: 'unidadMedida',
            value: unidad,
            setValue: setUnidad,
            
            
        }
    ]


    const handleReset = _ => {
        setNombreProducto('');
        setStock(15);
        setUnidad('');
    }



    useEffect(() => {

        apiSetStateFromUrl("/api/productos/reporteproductos", setProducto, setLoading);
        
       

        document.title = 'Finanzas | Reporte Stock';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={producto} setItems={setProducto} header={HEADER} title="Stock" inputs={INPUTS} excepto={EXCEPTO} url="/api/productos" nameId="idProducto" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} eliminar={false} agregar={false} editar={false} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default ReporteStock;