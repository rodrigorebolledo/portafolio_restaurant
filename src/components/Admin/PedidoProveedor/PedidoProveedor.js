import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Layout, LayoutCrud } from '../Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { List } from '@material-ui/core';
import { useAuthState } from '../../Context';


const header = ['ID', 'Cantidad', 'Ingredientes', 'Nombre_Plato']



const PedidoProveedor = () => {
    const PROVEEDOR_ID = 1
    const userDetails = useAuthState();
    const [proveedor, setProveedor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idProveedor, setIdProveedor] = useState(PROVEEDOR_ID);
    const [idProvProd, setIdProvProd] = useState('msg');
    const [cantidad, setCantidad] = useState(1);
    const [proveProductos, setProveProductos] = useState([]);
    const [idUsuario, setIdUsuario] = useState(undefined);
    const [provProdSelected, setProvProdSelected] = useState([]);
    const [nombreProducto, setNombreProducto] = useState(undefined)


    useEffect(() => {
        apiSetStateFromUrl("/api/proveedores", setProveedor, setLoading);
        apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined, PROVEEDOR_ID);
        document.title = 'Admin Pedidos';
        setIdUsuario(userDetails.user.idUsuario);

    }, [])
    useEffect(() => {
        if (proveProductos.length) {
            apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined, idProveedor);
        } else {
            return;
        }
    }, [idProveedor]
    )


    const handleAddProduct = () => {
        if (idProvProd !== 'msg') {

            const numberRandom = Math.random();

            const prodSplit = idProvProd.split('|');

            const product = {
                idFlag: numberRandom,
                cantidadDetPed: cantidad,
                provProd: {
                    idProvProd: prodSplit[0],
                    producto: {
                        nombreProducto: prodSplit[1]
                    }
                }
            }
            setProvProdSelected([...provProdSelected, product])
        }
    }

    const handleDeleteProduct = (idFlag) => {
        console.log(cantidad)
        const itemsFiltrados = provProdSelected.filter(i => i.idFlag !== idFlag)
        setProvProdSelected(itemsFiltrados);
    }

    return (
        <Layout>
            {!loading ? <>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Proveedor</Form.Label>
                            <Form.Control as="select" value={idProveedor} onChange={(e) => {
                                setIdProveedor(e.target.value)
                            }}>
                                {
                                    proveedor.map((prov, index) => {
                                        return (<option key={index} value={prov.idProveedor}>{prov.nombreProveedor}</option>)
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group controlId="formGridState">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control as="select" value={idProvProd} required onChange={(e) => {
                            setIdProvProd(e.target.value)
                        }}>
                            <option selected disabled hidden value='msg'>Selecciona un producto</option>
                            {proveProductos ? proveProductos.map((provprod, index) => {
                                return (<option key={index} value={provprod.idProvProd + '|' + provprod.producto.nombreProducto} nombreProducto={provprod.producto.nombreProducto}>{provprod.producto.nombreProducto}</option>)
                            }) : null}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Cantidad">
                        <Form.Label>Cantidad de Producto</Form.Label>
                        <Form.Control required value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} type="number" placeholder="Ingrese cantidad a pedir" />
                    </Form.Group>
                    <Form.Row>
                        <Button type="submit" variant="primary" onClick={() => handleAddProduct()} >Agregar</Button>
                        <Button variant="secondary" type="submit">Realizar Pedido</Button>
                    </Form.Row>
                </Form>
                <ul>
                    {provProdSelected.length ? provProdSelected.map((prov, idx) => {
                        console.log(prov)
                        return (
                            <li>Producto: {prov.provProd.producto.nombreProducto} | Cantidad: {prov.cantidadDetPed} <button onClick={() => handleDeleteProduct(prov.idFlag)}>X</button></li>
                        )
                    }) : null}
                </ul>
            </> : <CustomSpinner />}
        </Layout>
    )



}

export default PedidoProveedor;