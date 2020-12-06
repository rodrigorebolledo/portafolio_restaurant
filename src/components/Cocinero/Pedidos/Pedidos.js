import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID', 'Cantidad de platos','Nombre del plato','Estado del plato', 'Número de orden'/*,'Número de mesa'*/]


const Ordenes = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(undefined);
    const [nombrePlato, setNombrePlato] = useState(undefined);
    const [estadoPlato, setEstadoPlato] = useState(undefined);
    const [numeroOrden, setNumeroOrden] = useState(undefined);
   // const [mesa, setMesa] = useState(undefined);
    
    const INPUTS = [
        /*{
            label: 'Nombre Plato',
            type: 'text',
            placeholder: 'Ingrese el nombre del plato',
            column: 'plato',
            subcolumn: 'idPlato',
            value: nombrePlato,
            setValue: setNombrePlato,
            
        },*/
        {
            label: 'Cantidad',
            type: 'number',
            placeholder: 'Ingrese la cantidad de platos',
            column: 'cantidadDetOr',
            value: cantidad,
            setValue: setCantidad,
        },
        {
            label: 'Estado Plato',
            type: 'select',
            placeholder: 'Ingrese el estado del plato',
            column: 'estadoPlato',
            subcolumn: 'idEstadoPlato',
            value: estadoPlato,
            setValue: setEstadoPlato,
            options: [
                {
                    nombre: 'EN_PREPARACION',
                    value: 1
                    
                },
                {
                    nombre: 'LISTO',
                    value: 2
                },
                {
                    nombre: 'En_Cola',
                    value: 3
                },
                
            ]
            
        },
        /*{
            label: 'Número orden',
            type: 'number',
            placeholder: 'Número de la orden',
            column: 'orden',
            value: numeroOrden,
            setValue: setNumeroOrden,
            
        },
        {
            label: 'Mesa',
            type: 'text',
            placeholder: 'numero de mesa',
            column: 'orden',
            subcolumn: 'idOrden',
            value: mesa,
            setValue: setMesa,
            
        },*/
        /*{
            label: 'Categoria',
            type: 'select',
            column: 'categoria',
            subcolumn: 'idCategoria' ,
            value: categoria,
            setValue: setCategoria,
            options: [
                {
                    nombre: 'BEBIDAS',
                    value: 1
                    
                },
                {
                    nombre: 'CARNES',
                    value: 2
                },
                {
                    nombre: 'PESCADOS',
                    value: 3
                },
                {
                    nombre: 'PASTAS',
                    value: 4
                },
                {
                    nombre: 'VEGETARIANO',
                    value: 5
                },
                {
                    nombre: 'POSTRES',
                    value: 6
                }
            ]
        }*/
    
    ]
    const handleReset = _ => {
        setNombrePlato('');
        setNumeroOrden();
        setEstadoPlato(1);
        setCantidad();
       // setMesa();

    }

    useEffect(() => {
        apiSetStateFromUrl("/api/detalleordenes", setOrdenes, setLoading);
        document.title = 'Admin ordenes';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={ordenes} setItems={setOrdenes} header={header} title="Ordenes" inputs={INPUTS} url="/api/detalleordenes" nameId="idDetOr" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Ordenes;