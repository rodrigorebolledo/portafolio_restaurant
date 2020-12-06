import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';

import Background from '../Background';
import './Login.scss';
import { loginUser, loginInvitado, useAuthState, useAuthDispatch, registerUser } from '../../Context';
import { apiLoadUser } from '../Api';
import ModalRegister from './ModalRegister';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showRegister, setShowRegister] = useState(false);
    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();



    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let data = await loginUser(dispatch, { emailUsuario: email, passUsuario: password });
            console.log(data)
            if (!data) return;
            console.log(data)
            if (data.perfil.idPerfil === 2) {
                window.location.replace("/admin");
            } else if (data.perfil.idPerfil === 1) {
                window.location.replace("/");
            }else if (data.perfil.idPerfil === 4) {
                window.location.replace("/cocinero");
            }else if (data.perfil.idPerfil === 8) {
                window.location.replace("/bodeguero");
            }else if (data.perfil.idPerfil === 5) {
                window.location.replace("/mesero");
            }else if (data.perfil.idPerfil === 3) {
                window.location.replace("/finanzas");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    // const handleInvitado = async () => {
    //     console.log('invitado');
    //     try {
    //         let response = await loginInvitado(dispatch);
    //         if(!response.user) return;
    //         props.history.push('/');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const handleRegister = async (obj) => {
        try {
            let data = await registerUser(dispatch, obj);
            if (!data) return;
            window.location.replace("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Background>
            <Container className="container-form">
                <Row className="justify-content-center">
                    <Col xs={12} md={5} className="form">
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
                                <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese email aquí" required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
                            </Form.Group>
                            {errorMessage ?
                                <Row className="justify-content-center">
                                    <p>{errorMessage}</p>
                                </Row> : null}
                            <Row>
                                <Col xs={6} md={6} className="mt-3">
                                    <Button variant="primary" type="submit" className="button">
                                        Iniciar
                                    </Button>
                                </Col>
                                <Col xs={6} md={6} className="mt-3">
                                    <Button variant="secondary" className="button" onClick={_ => setShowRegister(true)}>
                                        Registrarse
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <ModalRegister show={showRegister} setShow={setShowRegister} handleRegister={handleRegister} loading={loading} errorMessage={errorMessage} />
            </Container>
        </Background>
    )
}
export default Login;