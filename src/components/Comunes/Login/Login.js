import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';

import Background from '../Background';
import './Login.scss';
const Login = () => {
    return (
        <Background>
            <Container className="container-form">
                <Row className="justify-content-center">
                    <Col xs={12} md={5}  className="form">
                        <Row className="text-center" >
                            <Col xs={12}>
                                <h1>INICIAR SESIÓN</h1>
                            </Col>
                        </Row>
                        <Row className="justify-content-center mt-3">
                            <PersonIcon className="logo" />
                        </Row>
                        <Form className="mt-3">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese email aquí" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Row>
                                <Col xs={6} md={6} className="mt-3">
                                    <Button variant="primary" type="submit" className="button">
                                        Iniciar
                                    </Button>
                                </Col>
                                <Col xs={6} md={6} className="mt-3">
                                    <Button variant="secondary" type="submit" className="button">
                                        Invitado
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Background>
    )
}
export default Login;