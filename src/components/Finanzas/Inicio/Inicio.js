import React, { useEffect, useState } from 'react';
import {Layout, LayoutCrud} from '../LayoutFinanzas';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import CrudTable from '../../Comunes/CrudTable';
import { apiSetStateFromUrl } from '../../Comunes/Api';
import { CustomSpinner } from '../../Comunes/CustomSpinner';
import moment from 'moment';
//import '../Inicio/DivCard.scss'
import { MDBIcon } from "mdbreact";

const HEADER = ['Fecha del Movimiento','Tipo',  'Descripción del movimiento', 'Monto Movimiento'];
export default function Inicio() {
    const[detalleMovimiento, setDetalleMovimiento]=useState([]);
    const[loading, setLoading]=useState([]);
    

    useEffect(()=>{
        
        apiSetStateFromUrl("/api/movimientos/reportedineromes", setDetalleMovimiento, setLoading);
        document.title = 'Finanzas | Inicio';
        
    },[])
    
    

    return (
        <Layout>
            <Container>
                <br></br>
                <h1>Bienvenido Finanzas</h1>
                <br></br>
                <Card border="info" style={{ width: 'auto' }}>
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                    Dentro de este perfil podrá encontrar lo siguiente:
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                                <ul>
                                    <li>Reportes Platos</li>
                                    <li>Reportes Stock</li>
                                    <li>Reportes Reserva</li>
                                    <li>Reportes Proveedores</li>
                                </ul>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <br></br>
               
                <LayoutCrud>
                {!loading ? <CrudTable items={detalleMovimiento} setItems={setDetalleMovimiento} header={HEADER} title="Detalle de movimiento de dinero "  url="/api/movimientos/reportedineromes" nameId="fechaMov" apiSetStateFromUrl={apiSetStateFromUrl} eliminar={false} agregar={false} editar={false} /> : <CustomSpinner />}
                </LayoutCrud>
                <br></br>
                <h2>Consejos</h2>
                <br></br>
                <Row>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="credit-card" size="4x"/>
                            <h5>
                                Recuerde el buen trato a los clientes.
                            </h5>
                            <p>Tips para entregar un buen servicio:</p>
                            <ul>
                                <li>Saludar a los clientes a su llegada.</li>
                                <li>Revisar que el dinero que se ha entregado no presente roturas ni manchas.</li>
                                <li>Ser cortés y educado en todo momento con el cliente.</li>
                                <li>Despedirse a la partida del recinto, invitandolos a volver pronto.</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="check" size="4x"/>
                            <h5>
                                Recuerde revisar bien los arqueos
                            </h5>
                            <p>Al momento de revisar la cuadratura, contar de manera ordenada los ingresos y egresos para evitar confusiones.</p>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="comments" size="4x"/>
                            <h5>
                                Recuerde las medidas de seguridad.
                            </h5>
                            <p>Comunica a tus compañeros y a los clientes respetar las medidas de seguridad. ¡Cuidémonos entre todos!</p>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <h2>Enlaces</h2>
                <br></br>
                <Row>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Reporte de platos</Card.Title>
                                <Card.Text>
                                    Podra ver reportes de platos vendidos del último mes.
                                </Card.Text>
                                <Button variant="primary" href="finanzas/reportes_plato">Reporte Plato</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Reporte Stock</Card.Title>
                                <Card.Text>
                                Podra ver el stock de los prodcutos en bodega.
                                </Card.Text>
                                <Button variant="primary" href="finanzas/reportes_stock">Reportes Stock</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Reporte Reserva</Card.Title>
                                <Card.Text>
                                Podra ver un reporte de las cantidaddes de reservas de los usuarios en el último mes.
                                </Card.Text>
                                <Button variant="primary" href="finanzas/reportes_reservas">Reportes Reserva</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Reporte Proveedores</Card.Title>
                                <Card.Text>
                                Podra ver un reporte de las cantidaddes de pedidos a proveedores en el último mes.
                                </Card.Text>
                                <Button variant="primary" href="finanzas/reportes_proveedores">Reportes Proveedores</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </Layout>
    )
}