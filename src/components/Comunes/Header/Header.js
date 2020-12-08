import React, { useState } from 'react';
import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../../assets/img/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../Context';
import { logout, useAuthDispatch, useCarroState, useCarroDispatch } from '../../Context';
import Modal from 'react-bootstrap/Modal';
import { PlaceTwoTone } from '@material-ui/icons';



const PrintCarrito = (props) => {
    //const [listaPlatosSeleccionados, setListaPlatosSeleccionados] = useState([]);
    const plateDetails = useCarroState();
    const { itemCount = 2 } = props;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //console.log(plateDetails);

    return (
        <Col className="text-center boton-ico-text">
            <ShoppingCartIcon variant="primary" onClick={handleShow}/>
            
            <Badge variant="light" className="badge-notify">{itemCount}</Badge>
            <p>Carrito</p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Resumen Pago</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>
                        Lista de pedidos: {}
                    </h5>
                    <h2>
                        Total a pagar: $10000
                    </h2>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Salir
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Pagar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    )
}


const Header = (props) => {

    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
        window.location.reload(false);
    }


    const PrintAcceso = () => (
        <Col className="text-center boton-ico-text" as={Link} to="/login">
            <AccountCircleIcon />
            <p>Acceso</p>
        </Col>
    );


    const PrintLogout = () => (
        <Col className="text-center boton-ico-text" onClick={() => handleLogout()}>
            <AccountCircleIcon />
            <p>Salir</p>
        </Col>
    );
    const userDetails = useAuthState();
    const { isAdmin, itemCount, show } = props.statusObject;
    // const { isLogin, isAdmin = false, itemCount } = statusObject;
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col>
                        <img src={Logo} className="image-responsive" alt="Logo" />
                    </Col>
                    <Row className="mt-3" style={{ margin: 0 }}>
                        {userDetails.user !== undefined && userDetails.user.perfil !== undefined ? (
                            <p className="nombre-usuario">Hola {userDetails.user.perfil.nombrePerfil}</p>
                        ) : null}
                        {!isAdmin === true && show === true && <PrintCarrito itemCount={itemCount} />}
                        {!Boolean(userDetails.user) ? <PrintAcceso /> : <PrintLogout />}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Header;