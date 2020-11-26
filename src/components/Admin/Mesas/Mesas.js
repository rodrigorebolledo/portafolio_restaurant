import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../Layout/Layout';
import CrudTable from '../CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID', 'Numero de Mesa', 'Capacidad', 'Estado']

//DEFAULT
const Mesas = () => {

    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
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
            min: "1",
        },
        {
            label: 'Capacidad mesa',
            type: 'number',
            placeholder: 'Ingrese la capacidad de la mesa',
            column: 'capacidadMesa',
            value: capacidadMesa,
            setValue: setCapacidadMesa,
            min: "1",
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


    const handleReset = _ => {
        setNumeroMesa(1);
        setCapacidadMesa(1);
        setEstadoMesa(1);
    }



    useEffect(() => {
        apiSetStateFromUrl("/api/mesas", setMesas, setLoading);
        document.title = 'Admin Mesas';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={mesas} setItems={setMesas} header={header} title="Mesas" inputs={INPUTS} url="/api/mesas" nameId="idMesa" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Mesas;