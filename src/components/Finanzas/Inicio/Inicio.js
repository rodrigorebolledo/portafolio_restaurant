import React from 'react';
import {Layout} from '../LayoutFinanzas';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import '../Inicio/DivCard.scss'
import { MDBIcon } from "mdbreact";

export default function Inicio() {
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
                                    <li>Generar Reportes</li>
                                </ul>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <br></br>
                <h2>Resumen de movimientos</h2>
                <Col>
                    <div className="w3-card-4 w3-green" >
                        <Row className="justify-content-center mt-5">
                            <div className="divCard">
                                <h2>Ventas mensuales</h2>
                                <Row>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    <h2>120.000</h2>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <div className="w3-card-4 w3-red" >
                        <Row className="justify-content-center mt-5">
                            <div className="divCard">
                                <h2>Egresos mensuales</h2>
                                <Row>
                                    <i className="fa fa-usd" aria-hidden="true"></i>
                                    <h2>120.000</h2>
                                </Row>
                            </div>
                        </Row>
                    </div>
                    <br></br>
                </Col>
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
                                <Card.Title>Generar Reportes</Card.Title>
                                <Card.Text>
                                    Para generar reportes, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="finanzas/reportes">Reportes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}