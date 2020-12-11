import React, { useEffect } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Layout } from '../Layout';
import '../Inicio/DivCard.scss'
import Container from 'react-bootstrap/Container';
//import '../Inicio/DivCard.scss'
import { MDBIcon } from "mdbreact";


const Inicio = () => {
    useEffect(_ => {
        document.title = 'Admin | Inicio';
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
                                    <li>Administrar Proveedores</li>
                                    <li>Realizar Pedidos</li>
                                    
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
                                Recuerde resguardar su información.
                            </h5>
                            <p>Tips para conservar la seguridad de su sitio:</p>
                            <ul>
                                <li>No entregar su equipo a alguien que pueda hacer mal uso de este.</li>
                                <li>Mantener actualizado su antivirus y los distintos softwares que utilice.</li>
                                <li>No abrir correos o links que no parezcan venir de fuentes confiables.</li>
                                <li>Utilizar una contraseña de combinación entre letras, números, mayúsculas y símbolos.</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="check" size="4x"/>
                            <h5>
                                Recuerde tener lo necesario para el funcionamiento del local
                            </h5>
                            <p>El equipo de trabajo necesita mantener sus implementos y los insumos para continuar realizando su gran labor. Revise que estos se encuentren disponibles.</p>
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
                                <Card.Title>Administrar productos del Proveedor</Card.Title>
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
                                <Card.Title>Proveedores</Card.Title>
                                <Card.Text>
                                    Administrar los proveedores con los que cuenta el negocio.
                                </Card.Text>
                                <Button variant="primary" href="admin/proveedores">Proveedor</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Pedidos a Proveedores</Card.Title>
                                <Card.Text>
                                    Podra realizar pedidos a los distintos proveedores registrados
                                </Card.Text>
                                <Button variant="primary" href="admin/pedido_proveedor">Pedidos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container> 
        </Layout>
    )
}

export default Inicio;