import React, { useEffect, useState } from 'react';
import { Layout, LayoutCrud } from '../Layout';
import CrudTable from '../CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
const HEADER = ['ID', 'Email', 'Password', 'Estado', 'Perfil'];

//DEFAULT
const Usuarios = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState(undefined);
    const [password, setPassword] = useState(undefined);
    const [estado, setEstado] = useState('t');
    const [perfil, setPerfil] = useState(6);
    const [editPerfil, setEditPerfil] = useState(undefined);

    const INPUTS = [
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Ingrese su email',
            column: 'emailUsuario',
            value: email,
            setValue: setEmail,
        },
        {
            label: 'Contraseña',
            type: 'password',
            placeholder: 'Ingrese una contraseña',
            column: 'passUsuario',
            value: password,
            setValue: setPassword,
        },
        {
            label: 'Estado',
            type: 'select',
            column: 'estadoUsuario',
            value: estado,
            setValue: setEstado,
            options: [
                {
                    nombre: 'Habilitado',
                    value: 't'
                },
                {
                    nombre: 'Deshabilitado',
                    value: 'f'
                }
            ]
        },
        // {
        //     label: 'Run',
        //     type: 'text',
        //     placeholder: 'Ingrese su run',
        //     column: 'rutPerson',
        //     value: run,
        //     setValue: setRun,        
        // },
        // {
        //     label: 'Nombre',
        //     type: 'text',
        //     placeholder: 'Ingrese su nombre',
        //     column: 'nombrePerson',
        //     value: nombre,
        //     setValue: setNombre,   
        // },
        // {
        //     label: 'Apellido',
        //     type: 'text',
        //     placeholder: 'Ingrese su apellido',
        //     column: 'apellidoPerson',
        //     value: apellido,
        //     setValue: setApellido,    
        // },
        {
            label: 'Perfil',
            type: 'select',
            column: 'perfil',
            subcolumn: 'idPerfil',
            value: perfil,
            setValue: setPerfil,
            options: [
                {
                    nombre: 'Administrador',
                    value: 1
                },
                {
                    nombre: 'Contador',
                    value: 3
                },
                {
                    nombre: 'Bodeguero',
                    value: 6
                },
                {
                    nombre: 'Cocinero',
                    value: 5
                },
                {
                    nombre: 'Garzón',
                    value: 4
                }
            ]
        }
    ];


    const handleReset = _ => {
        setEmail(undefined);
        setPassword(undefined);
        setEstado('t');
        setPerfil(6)
        setEditPerfil(undefined);
    }

    useEffect(() => {
        apiSetStateFromUrl("/usuarios", setUsers, setLoading);
    }, []);

    return (
        <Layout>
            <LayoutCrud>
                {!loading ? <CrudTable items={users} setItems={setUsers} header={HEADER} title="Usuarios" inputs={INPUTS} url="/usuarios" nameId="idUsuario" apiSetStateFromUrl={apiSetStateFromUrl} handleReset={handleReset} /> : <CustomSpinner />}
            </LayoutCrud>
        </Layout>
    )
}

export default Usuarios;