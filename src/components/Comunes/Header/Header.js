import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../../assets/img/logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useAuthState } from '../../Context';
import { logout, useAuthDispatch } from '../../Context';



const PrintCarrito = (props) => {
    const { itemCount = 0 } = props;
    return (
        <Col className="text-center boton-ico-text" >
            <ShoppingCartIcon />
            <Badge variant="light" className="badge-notify">{itemCount}</Badge>
            <p>Carrito</p>
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
    const { statusObject } = props;
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

                        {!Boolean(userDetails.user) ? <PrintAcceso /> : <PrintLogout />}

                        {/* {!isAdmin && <PrintCarrito itemCount={itemCount} />} */}
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Header;