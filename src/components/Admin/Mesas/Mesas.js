import React, { useState, useEffect } from 'react';
import  { LayoutCrud, Layout } from '../Layout/Layout';
import CrudTable from '../CrudTable';
import { apiSetStateFromUrl } from '../Api';

const header = ['ID', 'Numero de Mesa', 'Capacidad', 'Estado']

//DEFAULT
const Mesas = () => {

    const [mesas, setMesas] = useState([]);
    const [numeroMesa, setNumeroMesa] = useState(1);
    const [capacidadMesa, setCapacidadMesa] = useState(1);
    const [estadoMesa, setEstadoMesa] = useState(1);

    const INPUTS = [
        {
            label: 'Número mesa',
            type: 'number',
            placeholder: 'Ingrese el numero de la mesa',
            value: numeroMesa,
            setValue: setNumeroMesa,  
        },
        {
            label: 'Capacidad mesa',
            type: 'number',
            placeholder: 'Ingrese la capacidad de la mesa',
            value: capacidadMesa,
            setValue: setCapacidadMesa,  
        },
        {
            label: 'Estado',
            type: 'select',
            value: estadoMesa,
            setValue: setEstadoMesa,               
            options: [
                {
                    nombre: 'Disponible',
                    value: 1
                },
                {
                    nombre: 'No Disponible',
                    value: 2
                }
            ]
        }
    ]
    useEffect(() => {
        apiSetStateFromUrl("/mesas", setMesas);
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                { mesas.length && <CrudTable body={mesas}  header={header} title="Mesas" inputs={INPUTS} />}
            </LayoutCrud>
        </Layout>
    )
}

export default Mesas;