import React, { useEffect} from 'react';
import Layout from '../LayoutMesero';
import Container from 'react-bootstrap/Container';
import { Col, Row, Card, Button } from 'react-bootstrap';
import { MDBIcon } from "mdbreact";



export default function Inicio() {

    useEffect(() => {
        document.title = 'Mesero | Inicio';
    }, [])

    return (
        <Layout>
            <Container>
                <br></br>
                <h1>Bienvenido Mesero</h1>
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
                                    <li>Realizar Ordenes</li>
                                    <li>Ver Ordenes</li>
                                </ul>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <br></br>
                <h2>Consejos</h2>
                <br></br>
                <Row>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="star" size="4x"/>
                            <h5>
                                Recuerde el buen trato a los clientes.
                            </h5>
                            <p>Tips para entregar un buen servicio:</p>
                            <ul>
                                <li>Saludar a los clientes a su llegada.</li>
                                <li>Presentarse y darles a conocer que los atenderán.</li>
                                <li>Estar pendientes a las necesidades del cliente.</li>
                                <li>Despedirse a la partida del recinto, invitandolos a volver pronto.</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="check" size="4x"/>
                            <h5>
                                Recuerde entregar el dispositivo al cliente.
                            </h5>
                            <p>Entregue el dispositivo para que el cliente pueda ordenar y seleccionar los platos a pedir.</p>
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
                                <Card.Title>Realizar orden</Card.Title>
                                <Card.Text>
                                    Para realizar una orden, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="mesero/orden">Orden</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Revisar ordenes</Card.Title>
                                <Card.Text>
                                    Para revisar las ordenes, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="mesero/ordenes">Ver Ordenes</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}