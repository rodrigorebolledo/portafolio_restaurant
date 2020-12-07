import React, { useState, useEffect } from 'react';
import { LayoutCrud, Layout } from '../LayoutCocinero';
import { Row, Col, Button } from 'react-bootstrap';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import { VerOrdenes } from '../../Comunes/VerOrdenes/VerOrdenes';
import './Pedidos.scss';
const header = ['ID', 'Cantidad de platos', 'Nombre del plato', 'Estado del plato', 'Número de orden'/*,'Número de mesa'*/]


const EJEMPLO_PEDIDOS = [
    { numeroPedido: 3, numeroMesa: 1 },
    { numeroPedido: 3, numeroMesa: 1 },
    { numeroPedido: 3, numeroMesa: 1 },
    { numeroPedido: 3, numeroMesa: 1 },
    { numeroPedido: 3, numeroMesa: 1 }
]




const Ordenes = () => {

    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isPreparing, setIsPreparing] = useState(false);
    const [cantidad, setCantidad] = useState(undefined);
    const [nombrePlato, setNombrePlato] = useState(undefined);
    const [estadoPlato, setEstadoPlato] = useState(undefined);
    const [numeroOrden, setNumeroOrden] = useState(undefined);
    // const [mesa, setMesa] = useState(undefined);

    const PrintPedidos = () => {


        if (ordenes.length > 0 && isPreparing === true) {
            return (
                <div>
                    <Row className="justify-content-start mt-3" style={{ marginLeft: '20px' }}>
                        <Button variant="success" className="buttonOrden" onClick={() => { setIsPreparing(false) }}>Retroceder</Button>
                    </Row>
                    <Row className="justify-content-center" style={{ marginTop: '-45px' }}>
                        <h1>Pedido: 3 - Mesa: 2</h1>
                    </Row>
                    <PrintOrdenes />
                </div>
            )
        } else {
            return (
                <div className="container">
                    <Row className=" mt-3">
                        {EJEMPLO_PEDIDOS.map((pedido => {
                            return (
                                <Col className="tarjetaPedido" xs={12} md={3} onClick={() => { setIsPreparing(true) }}>
                                    <h3>Número pedido: {pedido.numeroPedido}</h3>
                                    <h4>Número mesa: {pedido.numeroMesa}</h4>
                                </Col>
                            )
                        }))}
                    </Row>
                </div>
            )
        }

    }
    const PrintOrdenes = _ => {
        return (
            ordenes.map((orden) => {
                return (
                    <VerOrdenes orden={orden} />
                )
            })
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
        apiSetStateFromUrl("/api/detalleordenes", setOrdenes, setLoading);
        document.title = 'Admin ordenes';
    }, [])

    return (
        <Layout>
            {!loading ? <PrintPedidos /> : <CustomSpinner />}
        </Layout>
    )
}

export default Ordenes;