import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';
import routes from '../Config/routes';
import './Layout.scss';
const MenuBodeguero = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="navbar-container">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link as={NavLink} to="/" activeClassName="active" exact>Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/reservar" activeClassName="active" exact>Reservar</Nav.Link>
                            <Nav.Link as={NavLink} to="/ver_reservas" activeClassName="active">Ver Reservas</Nav.Link> */}
                            {routes.map((route => {
                                console.log(route);
                                if (route.name != undefined && route.needLogin !== true) {
                                    return (
                                        <Nav.Link as={NavLink} to={route.path} activeClassName="active">{route.name}</Nav.Link>
                                    )
                                } else {
                                    return null;
                                }
                            }))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuBodeguero;