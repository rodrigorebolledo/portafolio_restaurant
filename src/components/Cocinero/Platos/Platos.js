import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { responsiveFontSizes } from '@material-ui/core';
const header = ['ID', 'Nombre_Plato', 'Valor_Plato', 'Tiempo_Preparación', 'Preparación', 'Foto', 'Categoria']

const Platos = () => {

    const [platos, setPlatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombrePlato, setNombrePlato] = useState(undefined);
    const [valorPlato, setValorPlato] = useState(1);
    const [tiempoPreparacion, setTiempoPrepación] = useState(1);
    const [preparacion, setPrepación] = useState(undefined);
    const [foto, setFoto] = useState(undefined);
    const [categoria, setCategoria] = useState(1);
    const [apiCategoria, setApiCategoria] = useState([]);


    const INPUTS = [
        {
            label: 'Nombre Plato',
            type: 'text',
            placeholder: 'Ingrese el nombre del plato',
            column: 'nombrePlato',
            value: nombrePlato,
            setValue: setNombrePlato,

        },
        {
            label: 'Valor Plato',
            type: 'number',
            placeholder: 'Ingrese el valor del plato',
            column: 'valorPlato',
            value: valorPlato,
            setValue: setValorPlato,
            min: "1",
        },
        {
            label: 'Tiempo Preparación',
            type: 'number',
            placeholder: 'Ingrese el tiempo de la preparación',
            column: 'tiempoPlato',
            value: tiempoPreparacion,
            setValue: setTiempoPrepación,
            min: "1",
        },
        {
            label: 'Preparación',
            type: 'text',
            placeholder: 'Ingrese la forma de preparar el plato',
            column: 'prepPlato',
            value: preparacion,
            setValue: setPrepación,

        },
        {
            label: 'Foto del Plato',
            type: 'text',
            placeholder: 'Ingrese el link(enlace) de la foto',
            column: 'fotoPlato',
            value: foto,
            setValue: setFoto,

        },
        {
            label: 'Categoria',
            type: 'select-bd',
            column: 'categoria',
            subcolumn: 'idCategoria',
            value: categoria,
            setValue: setCategoria,
            apiResult: apiCategoria,
            idSelect: 'idCategoria',
            nameSelect: 'nombreCategoria'
        }

    ]

    const EXCEPCIONES = ['SP']

    const handleReset = _ => {
        setNombrePlato('');
        setValorPlato(1);
        setTiempoPrepación(1);
        setPrepación('');
        setFoto('');
        setCategoria(1);

    }

    useEffect(() => {
        apiSetStateFromUrl("/api/platos", setPlatos, setLoading);
        apiSetStateFromUrl("/api/categorias/", setApiCategoria);
        document.title = 'Cocinero | Platos';
        
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable excepciones={EXCEPCIONES} items={platos} setItems={setPlatos} header={header} title="Platos" inputs={INPUTS} url="/api/platos" nameId="idPlato" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Platos;
