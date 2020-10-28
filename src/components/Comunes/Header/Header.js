import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Logo from '../../../assets/img/logo.png';
import './Header.scss';

const PrintAcceso = () => (
    <Col className="text-center boton-ico-text">
        <AccountCircleIcon />
        <p>Acceso</p>
    </Col>
);

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

    const { statusObject } = props;
    const { isLogin, isAdmin = false, itemCount } = statusObject;

    return (
        <div className="header">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col>
                        <img src={Logo} className="image-responsive" alt="Logo" />
                    </Col>
                    <Row className="mt-3" style={{margin: 0}}>
                        {!isLogin && <PrintAcceso />}
                        {/* {!isAdmin && <PrintCarrito itemCount={itemCount} />} */}
                    </Row>
                </Row> 
            </Container>    
        </div>
    )
}

export default Header;