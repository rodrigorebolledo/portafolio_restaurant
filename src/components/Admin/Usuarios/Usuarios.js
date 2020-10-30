import React, { useEffect, useState } from 'react';
import { Layout, LayoutCrud } from '../Layout';
import CrudTable from '../CrudTable';
import { apiSimpleLoad, apiSetStateFromUrl } from '../Api'


const HEADER = ['ID', 'Email', 'Password', 'Estado', 'Perfil'];

//DEFAULT
const Usuarios = () => {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [estado, setEstado] = useState('');
    const [run, setRun] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [perfil, setPerfil] = useState(2);

    const INPUTS = [
        {
            label: 'Email',
            type: 'email',
            placeholder: 'Ingrese su email',
            value: email,
            setValue: setEmail,             
        },
        {
            label: 'Contraseña',
            type: 'password',
            placeholder: 'Ingrese una contraseña',
            value: password,
            setValue: setPassword,     
        },
        {
            label: 'Estado',
            type: 'select',
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
        {
            label: 'Run',
            type: 'text',
            placeholder: 'Ingrese su run',
            value: run,
            setValue: setRun,        
        },
        {
            label: 'Nombre',
            type: 'text',
            placeholder: 'Ingrese su nombre',
            value: nombre,
            setValue: setNombre,   
        },
        {
            label: 'Apellido',
            type: 'text',
            placeholder: 'Ingrese su apellido',
            value: apellido,
            setValue: setApellido,    
        },
        {
            label: 'Perfil',
            type: 'select',
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


    

    useEffect(() => {
        apiSetStateFromUrl("/usuarios", setUsers);
    },[]);

    return (
        <Layout>
            <LayoutCrud>
                { users.length && (<CrudTable body={users}  header={HEADER} title="Usuarios" inputs={INPUTS} url="/usuarios" nameId="idUsuario"/>) }
           </LayoutCrud>
        </Layout>
    )
}

export default Usuarios;