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
    const [apiPlatos, setApiPlatos] = useState([]);
    const [apiIngredientes, setApiIngredientes] = useState([]);

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
            type: 'select-bd',
            placeholder: 'nombre del ingrediente para el plato',
            column: 'producto',
            subcolumn:'idProducto',
            value: ingredientes,
            setValue: setIngredientes,
            apiResult: apiIngredientes,
            idSelect: 'idProducto',
            nameSelect: 'nombreProducto'
        },
        {
            label: 'Nombre Plato',
            type: 'select-bd',
            placeholder: 'Ingrese el nombre del plato',
            column: 'plato',
            subcolumn: 'idPlato',
            value: nombrePlato,
            setValue: setNombrePlato,
            apiResult: apiPlatos,
            idSelect: 'idPlato',
            nameSelect: 'nombrePlato'
            
        },    
    ]
    const handleReset = _ => {
        setNombrePlato(2);
        setCantidad(1);
        setIngredientes(1);

    }

    useEffect(() => {
        apiSetStateFromUrl("/api/recetas", setRecetas, setLoading);
        apiSetStateFromUrl("/api/platos/", setApiPlatos);
        apiSetStateFromUrl("/api/productos/", setApiIngredientes);
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