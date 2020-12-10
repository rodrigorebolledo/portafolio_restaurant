import React, { useEffect } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Layout } from '../Layout';
import '../Inicio/DivCard.scss'
import Container from 'react-bootstrap/Container';
//import '../Inicio/DivCard.scss'
import { MDBIcon } from "mdbreact";


const Inicio = () => {
    useEffect(_ => {
        document.title = 'Admin Inicio';
    }, [])

    return (
        <Layout>
            <Container>
                <br></br>
                <h1>Bienvenido Administrador</h1>
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
                                    <li>Administrar Productos</li>
                                    <li>Administrar Usuarios</li>
                                    <li>Administrar Mesas</li>
                                    <li>Administrar Personas</li>
                                    <li>Revisar Reportes Históricos</li>
                                    <li>Administrar Proovedores</li>
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
                                <li>Despedirse a la partida del reecinto, invitandolos a volver pronto.</li>
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
                                <Card.Title>Administrar productos</Card.Title>
                                <Card.Text>
                                    Para administrar los productos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/productos">Productos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar usuarios</Card.Title>
                                <Card.Text>
                                    Para administrar los usuarios, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/usuarios">Usuarios</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar mesas</Card.Title>
                                <Card.Text>
                                    Para administrar las mesas, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/mesas">Mesas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar personas</Card.Title>
                                <Card.Text>
                                    Para administrar los personas, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/personas">Personas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Reportes históricos</Card.Title>
                                <Card.Text>
                                    Para revisar los reportes históricos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/reportes_historicos">Reportes Históricos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Generar reportes</Card.Title>
                                <Card.Text>
                                    Para generar reportes, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="admin/generar_reportes">Generar Reportes</Button>
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
                                <Button variant="primary" href="admin/proveedores">Proveedores</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </Layout>
    )
}

export default Inicio;