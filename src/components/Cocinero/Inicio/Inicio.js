import React, { useEffect } from 'react'
import { Col, Row, Card, Button } from 'react-bootstrap';
import { Layout } from '../LayoutCocinero';
import { MDBIcon } from "mdbreact";
import Container from 'react-bootstrap/Container';
//import '../Inicio/DivCard.scss'



const Inicio = () => {
    useEffect(_ => {
        document.title = 'Cocinero | Inicio';
    }, [])

    return (
        <Layout>           
            <Container>
                <br></br>
                <h1>Bienvenido Cocinero</h1>
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
                                    <li>Administrar Pedidos</li>
                                    <li>Administrar Platos</li>
                                    <li>Administrar Recetas</li>
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
                            <MDBIcon icon="thumbs-up" size="4x"/>
                            <h5>
                                Recuerde el uso correcto de sus herramientas
                            </h5>
                            <p>Cada herramienta que utiliza tiene un lugar designado. Recuerde respetar dicho lugar para evitar accidentes.</p>
                        </Card>
                    </Col>
                    <Col sm align="center">
                        <Card border="primary" style={{ width: 'auto' }}>
                            <MDBIcon icon="check" size="4x"/>
                            <h5>
                                Recuerde mantener orden e higiene
                            </h5>
                            <p>Dentro de su espacio de trabajo se necesita mantener una higiene de altos estándares que asegure la entrega impecable de los alimentos.</p>
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
                                    Para administrar los pedidos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="cocinero/pedidos">Pedidos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar platos</Card.Title>
                                <Card.Text>
                                    Para administrar los platos, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="cocinero/platos">Platos</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card border="success" style={{ width: 'auto' }}>
                            <Card.Body>
                                <Card.Title>Administrar recetas</Card.Title>
                                <Card.Text>
                                    Para administrar las recetas, haga click en el botón.
                                </Card.Text>
                                <Button variant="primary" href="cocinero/recetas">Recetas</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Inicio;



