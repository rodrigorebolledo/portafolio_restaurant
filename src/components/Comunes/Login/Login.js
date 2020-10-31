import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';

import Background from '../Background';
import './Login.scss';
import { loginUser, loginInvitado, useAuthState, useAuthDispatch } from '../../Context';
import { apiLoadUser } from '../Api';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();



    const handleLogin = async (e)  => {
        e.preventDefault();
        try {
            let response = await loginUser(dispatch, { email, password });
            if (!response.user) return;
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleInvitado = async () => {
        console.log('invitado');
        try {
            let response = await loginInvitado(dispatch);
            if(!response.user) return;
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

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
                        <Form className="mt-3" onSubmit={handleLogin}>
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
                                    <Button variant="secondary" className="button" onClick={() => handleInvitado()}>
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