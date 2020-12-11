import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../Layout/Layout';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const header = ['ID', 'Nombre Proveedor', 'Correo Proveedor', 'Telefono', 'Estado']

//DEFAULT
const Proveedores = () => {

    const [proveedor, setProveedor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nombreProveedor, setNombreProveedor] = useState();
    const [emailProveedor, setEmailProveedor] = useState();
    const [telefono, setTelefono] = useState();
    const [estado, setEstado] = useState();
    const INPUTS = [
        {
            label: 'Nombre Proveedor',
            type: 'text',
            placeholder: 'Ingrese el nombre del Proveedor',
            column: 'nombreProveedor',
            value: nombreProveedor,
            setValue: setNombreProveedor,
            min: '',
        },
        {
            label: 'Correo Proveedor',
            type: 'email',
            placeholder: 'Ingrese el Correo del Proveedor',
            column: 'emailProveedor',
            value: emailProveedor,
            setValue: setEmailProveedor,
            min: '0',
        },
        {
            label: 'Telefono',
            type: 'text',
            placeholder: 'Ingrese el Telefono del Proveedor',
            column: 'telefonoProveedor',
            value: telefono,
            setValue: setTelefono,
        },
        {
            label: 'Estado',
            type: 'select',
            placeholder: 'Ingrese el Estado del Proveedor',
            column: 'estadoProveedor',
            value: estado,
            setValue: setEstado,
            options: [
                {
                nombre: 'Habilitado',
                value: 't'
            },
            {
                nombre:  'Deshabilitado',
                value: 'f',
            }
            ]
        },
    ]


    const handleReset = _ => {
        setNombreProveedor('');
        setEmailProveedor('');
        setTelefono('+56901234567');
        setEstado('t');
    }



    useEffect(() => {
        apiSetStateFromUrl("/api/proveedores", setProveedor, setLoading);
        document.title = 'Admin | Proveedores';
    }, [])

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={proveedor} setItems={setProveedor} header={header} title="Proveedores" inputs={INPUTS} url="/api/proveedores" nameId="idProveedor" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Proveedores;