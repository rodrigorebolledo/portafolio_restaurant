import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import { Row, Col, Button, Container } from 'react-bootstrap';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl, editById } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { VerPlatos } from '../../Comunes/VerPlatos/VerPlatos';
import './Pedidos.scss';

const Pedidos = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPreparing, setIsPreparing] = useState(false);
    const [currentOrden, setCurrentOrden] = useState({})
    const [cantidad, setCantidad] = useState(undefined);
    const [nombrePlato, setNombrePlato] = useState(undefined);
    const [estadoPlato, setEstadoPlato] = useState(undefined);
    const [numeroOrden, setNumeroOrden] = useState(undefined);

    const PrintPedidos = () => {


        if (ordenes.length > 0 && isPreparing === true) {
            return (
                <Container>
                    <Row className="justify-content-start mt-3" style={{ marginLeft: '20px' }}>
                        <Button variant="success" className="buttonOrden" onClick={() => {
                            setIsPreparing(false);
                            handleRefreshApi();
                        }}>Retroceder</Button>
                    </Row>
                    <Row className="justify-content-center titlePedido">
                        <h1>Pedido: {currentOrden.idOr} - Mesa: {currentOrden.numeroMesa}</h1>
                    </Row>

                    <PrintOrdenes />
                </Container>
            )
        } else {
            return (
                <div className="container">
                    <Row className=" justify-content-center mt-3">
                        {ordenes.map(((orden, idx) => {

                            let colorBox = '#6c757d';
                            let cantidadEnCola = 0;
                            let cantidadListo = 0;
                            let cantidadPreparando = 0;
                            let lengthDetalleOrden = orden.detalle.length;

                            orden.detalle.map((detalle) => {
                                switch (detalle.estadoPlato.idEstadoPlato) {
                                    case 1:
                                        cantidadEnCola += 1;
                                        break;
                                    case 2:
                                        cantidadPreparando += 1
                                        break;
                                    case 3:
                                        cantidadListo += 1
                                        break;
                                    default:
                                        return;

                                }


                            })
                            console.log(orden)
                            console.log(cantidadEnCola)
                            console.log(cantidadPreparando)
                            console.log(cantidadListo)
                            if (cantidadEnCola === lengthDetalleOrden) {
                                colorBox = '#6c757d'
                            } else if (cantidadListo === lengthDetalleOrden) {
                                colorBox = '#28a745'
                            }

                            return (
                                <Col key={idx} className="tarjetaPedido" style={{ backgroundColor: colorBox }} xs={12} md={3} onClick={() => {
                                    setIsPreparing(true)
                                    setCurrentOrden(orden)
                                }}>
                                    <h3>Número pedido: {orden.idOr}</h3>
                                    <h4>Número mesa: {orden.numeroMesa}</h4>
                                </Col>
                            )
                        }))}
                    </Row>
                </div>
            )
        }

    }

    const handleEstadoPedido = async (idDetOr, estadoPlato) => {
        console.log(`idDetOr: ${idDetOr} || estadoPlato: ${estadoPlato}`);
        const objPlato = {
            'idDetOr': idDetOr,
            'estadoPlato': { 'idEstadoPlato': estadoPlato }
        }
        const result = await editById('/api/detalleordenes/estadoplato/', idDetOr, objPlato);
        return result;

    }

    const PrintOrdenes = () => {

        return (
            <VerPlatos detalle={currentOrden.detalle} handleEstadoPedido={handleEstadoPedido} />
        )


    }


    const handleReset = _ => {
        setNombrePlato('');
        setNumeroOrden();
        setEstadoPlato(1);
        setCantidad();
        // setMesa();

    }

    useEffect(() => {
        apiSetStateFromUrl("/api/ordenes/ordenadas/cocina", setOrdenes, setLoading);
<<<<<<< HEAD
        document.title = 'Cocinero | Pedidos';
=======
        
>>>>>>> 162628d1b96ea7bf02eca8e2f3b5e0fe803e3c82
    }, [])


    const handleRefreshApi = _ => {
        apiSetStateFromUrl("/api/ordenes/ordenadas/cocina", setOrdenes, setLoading);
    }

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Pedidos</h3>
<<<<<<< HEAD
=======
                
>>>>>>> 162628d1b96ea7bf02eca8e2f3b5e0fe803e3c82
                <Row>
                    {!loading && ordenes.length > 0 ? <PrintPedidos /> : <CustomSpinner />}
                </Row>
            </Col>

        </Layout>
    )
}

export default Pedidos;