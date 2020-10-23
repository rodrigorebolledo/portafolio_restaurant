import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

  
const MenuAdmin = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Menú Administrador</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/admin" activeClassName="active" exact>Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin/mesas" activeClassName="active">Mesas</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin/usuarios" activeClassName="active">Usuarios</Nav.Link>
                        <Nav.Link as={NavLink} to="/admin/productos" activeClassName="active">Productos</Nav.Link>
                        <NavDropdown title="Reportes" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={NavLink} to="/admin/generar_reportes">Generar Reportes</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/admin/reportes_historicos">Reportes Históricos</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MenuAdmin;
