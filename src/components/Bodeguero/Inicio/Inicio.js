import React, { useEffect } from 'react'
import { Layout } from '../LayoutBodeguero';
import { Col, Row, Card, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
//import '../Inicio/DivCard.scss'
import { MDBIcon } from "mdbreact";


const Inicio = () => {
    useEffect(_ => {
        document.title = 'Bodeguero | Inicio';
    }, [])

    return (
        <Layout>            
            <Container>
                <br></br>
                <h1>Bienvenido Bodeguero</h1>
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
                                    <li>Revisar Pedidos</li>
                                    <li>Administrar Productos</li>
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
                            <MDBIcon icon="check-circle" size="4x"/>
                            <h5>
                                Recuerde el buen uso de sus implementos de seguridad
                            </h5>
                            <p>Tips para el uso de sus implementos</p>
                            <ul>
                                <li>Revisar el buen estado de estos. De no ser así, comunicar al administrador para su reposición o cambio.</li>
                                <li>Utilizar los implementos personales de seguridad.</li>
                                <li>Respetar los espacios designados.</li>
                                <li>Revisar los pedidos que se hayan generado.</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="calendar" size="4x"/>
                            <h5>
                                Recuerde la revisión de los productos
                            </h5>
                            <p>Cada producto cuenta con su fecha de vencimiento, es importante saber las fechas de estos para no entregar un platillo que pueda ocasionar problemas entre los consumidores.</p>
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
                                <Card.Title>Pedidos</Card.Title>
                                <Card.Text>
                                    Para revisar los pedidos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="bodeguero/pedidos">Pedidos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar productos</Card.Title>
                                <Card.Text>
                                    Para administrar los productos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="mesero/ordenes">Productos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Inicio;