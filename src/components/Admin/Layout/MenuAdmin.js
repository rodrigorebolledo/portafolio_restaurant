import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { Container } from 'react-bootstrap';
import routes from '../Config/routes';
import './Layout.scss';
const MenuAdmin = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="nav-container">
                    <Navbar.Brand>Menú Administrador</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link as={NavLink} to="/admin" activeClassName="active" exact>Inicio</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/mesas" activeClassName="active">Mesas</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/usuarios" activeClassName="active">Usuarios</Nav.Link>
                            <Nav.Link as={NavLink} to="/admin/productos" activeClassName="active">Productos</Nav.Link> */}
                            {routes.map(((route, idx) => {
                                if (route.name) {
                                    return (
                                        <Nav.Link key={idx} as={NavLink} to={route.path} activeClassName="active">{route.name}</Nav.Link>
                                    )
                                } else {
                                    return null;
                                }
                            }))}
                            {/* <NavDropdown title="Reportes " id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/admin/generar_reportes">Generar Reportes</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/admin/reportes_historicos">Reportes Históricos</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MenuAdmin;
