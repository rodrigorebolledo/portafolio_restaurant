import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../Layout/Layout';
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
            column: 'numeroMesa',
            value: numeroMesa,
            setValue: setNumeroMesa,
        },
        {
            label: 'Capacidad mesa',
            type: 'number',
            placeholder: 'Ingrese la capacidad de la mesa',
            column: 'capacidadMesa',
            value: capacidadMesa,
            setValue: setCapacidadMesa,
        },
        {
            label: 'Estado',
            type: 'select',
            column: 'estado',
            subcolumn: 'idEstadoMesa',
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
                avance                {mesas.length ? <CrudTable items={mesas} setItems={setMesas} header={header} title="Mesas" inputs={INPUTS} url="/mesas" nameId="idMesa" /> : null}
            </LayoutCrud>
        </Layout>
    )
}

export default Mesas;