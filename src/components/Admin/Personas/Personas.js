import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../Layout/Layout';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';

//DEFAULT
const Personas = () => {

    const [personas, setPersonas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [rutPerson, setRutPerson] = useState('');
    const [nombrePerson, setNombrePerson] = useState(1);
    const [apellidoPerson, setApellidoPerson] = useState(0);

    const HEADER = ['ID', 'Run', 'Nombre', 'Apellido'];
    const EXCEPTO = ['emailUsuario']
    const INPUTS = [
        {
            label: 'Rut',
            type: 'text',
            placeholder: 'Ingrese el rut de la persona',
            column: 'rutPerson',
            value: rutPerson,
            setValue: setRutPerson,
        },
        {
            label: 'Nombre',
            type: 'text',
            min: 1,
            placeholder: 'Ingrese el nombre de la persona',
            column: 'nombrePerson',
            value: nombrePerson,
            setValue: setNombrePerson,
        },
        {
            label: 'Apellido',
            type: 'text',
            min: 0,
            placeholder: 'Ingrese el apellido de la persona',
            column: 'apellidoPerson',
            value: apellidoPerson,
            setValue: setApellidoPerson,
        },
    ]


    const handleReset = _ => {
        setRutPerson('');
        setNombrePerson(1);
        setApellidoPerson(0);
    }



    useEffect(() => {
        apiSetStateFromUrl("/api/personas/active", setPersonas, setLoading);
        document.title = 'Admin | Productos';
    }, [])
    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={personas} setItems={setPersonas} header={HEADER} title="Personas" inputs={INPUTS} excepto={EXCEPTO} url="/api/personas/active" nameId="idPerson" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} eliminar={false} agregar={false} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Personas;