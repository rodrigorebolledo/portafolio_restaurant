import React, { useState, useRef, useEffect } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import Rut from '../Rut';
export default function ModalRegister({ show, setShow, handleRegister, loading, errorMessage }) {

    const [rut, setRut] = useState('');
    const [rutIsValid, setRutIsValid] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const refRutInput = useRef();

    const handleClose = _ => {
        setShow(false);
        handleClear();
    }

    const handleClear = _ => {
        setRut('');
        setRutIsValid(false);
        setNombre('');
        setApellido('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (rutIsValid === true) {
            const registerData = {
                nombre: nombre,
                apellido: apellido,
                // rut: rut,
                rut: '19.816100-4',
                email: email,
                password: password,
            }
            handleRegister(registerData);
        } else {
            const { current } = refRutInput
            setRut('');
            current.focus();
            alert('Rut Invalido');


        }
    }

    return (
        <>
            <Modal show={show} onHide={_ => handleClose()} backdrop="static" >
                <Modal.Header closeButton>
                    <Modal.Title>Registrarse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="form-register" onSubmit={handleSubmit}>
                        <Row>
                            <Col className="mr-3" xs={12} md={6} className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Pedro" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Arriagada" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                            </Col>
                        </Row>
                        <Form.Group>
                            <Form.Label>Rut</Form.Label>
                            <Rut value={rut} onChange={(e) => setRut(e.target.value)} onValid={setRutIsValid}>
                                <Form.Control type="text" name="rut" placeholder="11.111.111-1" ref={refRutInput} required />
                            </Rut>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="pedro@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="*****" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={_ => handleClose()}>
                        Cancelar
                    </Button>
                    <Button form="form-register" variant="primary" type="submit" disabled={loading}>
                        Crear usuario
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}