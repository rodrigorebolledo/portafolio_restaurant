import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';

const MenuCliente = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={NavLink} to="/" activeClassName="active" exact>Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/reservar" activeClassName="active" exact>Reservar</Nav.Link>
                            <Nav.Link as={NavLink} to="/ver_reservas" activeClassName="active">Ver Reservas</Nav.Link>s
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuCliente;