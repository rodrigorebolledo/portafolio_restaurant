import React, { useEffect, useState } from 'react'
import { Col, Row, Table } from 'react-bootstrap';
import { Layout, LayoutCrud } from '../Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl, addElment } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { List } from '@material-ui/core';
import { useAuthState } from '../../Context';
import Container from 'react-bootstrap/Container';






const PedidoProveedor = () => {
    const PROVEEDOR_ID = 1
    const userDetails = useAuthState();
    const [proveedor, setProveedor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [idProveedor, setIdProveedor] = useState('msg');
    const [idProvProd, setIdProvProd] = useState('msg');
    const [cantidad, setCantidad] = useState(1);
    const [proveProductos, setProveProductos] = useState([]);
    const [idUsuario, setIdUsuario] = useState(undefined);
    const [provProdSelected, setProvProdSelected] = useState([]);
    const [listaPedido, setListaPedido] = useState([]);
    
    

    useEffect(() => {
        
        apiSetStateFromUrl("/api/proveedores", setProveedor, setLoading);
        // apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined, PROVEEDOR_ID);
        document.title = 'Admin | Pedidos';
        setIdUsuario(userDetails.user.idUsuario);

    }, [])
    useEffect(() => {
        if (idProveedor !== 'msg') {
            const provSplit = idProveedor.split('|');
            apiSetStateFromUrl("api/proveedorproductos/prov/", setProveProductos, undefined, provSplit[0]);
            setIdProvProd('msg')
        } else {
            return;
        }
    }, [idProveedor]
    )

const pagar =() =>{
    alert('Pago procesado')
}
    const handleAddProduct = () => {
        if (idProvProd !== 'msg') {

            const numberRandom = Math.random();

            const prodSplit = idProvProd.split('|');
            const provSplit = idProveedor.split('|');
            const product = {
                idFlag: numberRandom,
                nombreProveedor: provSplit[1],
                detalle: {
                    cantidadDetPed: cantidad,
                    provProd: {
                        idProvProd: prodSplit[0],
                        producto: {
                            nombreProducto: prodSplit[1]
                        }
                    }
                }

            }
            setProvProdSelected([...provProdSelected, product])
        }
    }


    const handleRealizarPedido = () => {
        const arregloObjeto = []
        provProdSelected.map((producto) => {
            arregloObjeto.push(producto.detalle)
        });
        const objeto = {
            idUsuario: idUsuario,
            detalle: arregloObjeto
        }

        let valid = false;
        if (objeto !== undefined && objeto !== {}) {
            valid = addElment('/api/pedidos/full', objeto)
        } else {
            alert('Es imposible realizar el pedido, favor intentar más tarde');
            return;
        }
        if (valid !== false) {
            alert('El pedido ha sido realizado correctamente');
            handleResetValues();
        } else {
            console.log('Ha ocurrido un error');
        }

    }

    const handleResetValues = () => {
        setIdProveedor('msg');
        setIdProvProd('msg');
        setCantidad(1);
        setProvProdSelected([]);


    }

    const handleDeleteProduct = (idFlag) => {
        console.log(cantidad)
        const itemsFiltrados = provProdSelected.filter(i => i.idFlag !== idFlag)
        setProvProdSelected(itemsFiltrados);
    }

    return (
        <Layout>
            {!loading ? <>
            <Container>
            <Row className="justify-content-md-center">
                <br></br>
                <h2>Realizar Pedido</h2>
                <br></br>
            </Row>
                <Form onSubmit={(e) => e.preventDefault()}>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Row>                            
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Proveedor</Form.Label>
                                    <Form.Control as="select" value={idProveedor} onChange={(e) => {
                                        setIdProveedor(e.target.value)
                                    }}>
                                        <option selected disabled hidden value='msg'>Selecciona un proveedor</option>
                                        {
                                            proveedor.map((prov, index) => {
                                                return (<option key={index} value={prov.idProveedor + '|' + prov.nombreProveedor}>{prov.nombreProveedor}</option>)
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>  
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
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
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Group controlId="Cantidad">
                                <Form.Label>Cantidad de Producto</Form.Label>
                                <Form.Control required value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} type="number" placeholder="Ingrese cantidad a pedir" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Row>
                                <Col>
                                    <Button type="submit" variant="primary" onClick={() => handleAddProduct()}>Agregar</Button>
                                </Col>
                                
                                    <Button variant="secondary" type="submit" onClick={() => handleRealizarPedido()}>Realizar Pedido</Button>
                                    <Col>
                                    <Button href='https://sandbox.flow.cl/btn.php?token=6gdyjy6' target='_blank'>Pagar</Button>
                                </Col>                       
                            </Form.Row>
                        </Col>
                    </Row>
                </Form>
                <ul>
                    {provProdSelected.length ? provProdSelected.map((prov, idx) => {
                        console.log(prov)
                        return (
                            <li key={idx}> Proveedor: {prov.nombreProveedor} | Producto: {prov.detalle.provProd.producto.nombreProducto} | Cantidad: {prov.detalle.cantidadDetPed} <button onClick={() => handleDeleteProduct(prov.idFlag)}>X</button></li>
                        )
                    }) : null}
                </ul>
            </Container>
            </> : <CustomSpinner />}
        </Layout>
    )



}

export default PedidoProveedor;