import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import { Row, Col, Button, Container } from 'react-bootstrap';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl, editById } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { VerPlatos } from '../../Comunes/VerPlatos/VerPlatos';
import './Pedidos.scss';

const Ordenes = () => {

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
                            return (
                                <Col key={idx} className="tarjetaPedido" xs={12} md={3} onClick={() => {
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
        document.title = 'Admin ordenes';
    }, [])


    const handleRefreshApi = _ => {
        apiSetStateFromUrl("/api/ordenes/ordenadas/cocina", setOrdenes, setLoading);
    }

    return (
        <Layout>
            <Col>
                <h3 className="mt-3">Órdenes</h3>
                <Row>
                    {!loading && ordenes.length > 0 ? <PrintPedidos /> : <CustomSpinner />}
                </Row>
            </Col>

        </Layout>
    )
}

export default Ordenes;