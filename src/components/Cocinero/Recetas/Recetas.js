import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID','Cantidad','Ingredientes','Nombre_Plato' ]

const Recetas = () => {

    const [recetas, setRecetas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombrePlato, setNombrePlato] = useState(undefined);
    const [ingredientes, setIngredientes] = useState(1);
    const [cantidad, setCantidad] = useState(1);

    const INPUTS = [
        {
            label: 'Cantidad',
            type: 'number',
            placeholder: 'Ingrese la cantidad de ingredientes',
            column: 'cantidadReceta',
            value: cantidad,
            setValue: setCantidad,
        },
        {
            label: 'Ingredientes',
            type: 'select',
            placeholder: 'nombre del ingrediente para el plato',
            column: 'producto',
            subcolumn:'idProducto',
            value: ingredientes,
            setValue: setIngredientes,
            options: [
                {
                    nombre: 'palta',
                    value: 1
                    
                },
                {
                    nombre: 'azucar',
                    value: 2
                },
                {
                    nombre: 'harina',
                    value: 3
                },
                {
                    nombre: 'sal',
                    value: 4
                },
                {
                    nombre: 'pollo',
                    value: 5
                },
                {
                    nombre: 'papa',
                    value: 6
                }
            ]
        },
        {
            label: 'Nombre Plato',
            type: 'select',
            placeholder: 'Ingrese el nombre del plato',
            column: 'plato',
            subcolumn: 'idPlato',
            value: nombrePlato,
            setValue: setNombrePlato,
            options: [
                {
                    nombre: 'ASDAS',
                    value: 1
                    
                },
                {
                    nombre: 'Pure',
                    value: 2
                },
                {
                    nombre: 'PURE',
                    value: 3
                },
                
            ]
            
        },    
    ]
    const handleReset = _ => {
        setNombrePlato(2);
        setCantidad(1);
        setIngredientes(1);

    }

    useEffect(() => {
        apiSetStateFromUrl("/api/recetas", setRecetas, setLoading);
        document.title = 'Admin Recetas';
        
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                
                {!loading ? <CrudTable items={recetas} setItems={setRecetas} header={header} title="Recetas" inputs={INPUTS} url="/api/recetas" nameId="idReceta" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}
export default Recetas;