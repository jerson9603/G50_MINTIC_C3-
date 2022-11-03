import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/miNavbar.css';

export const MiNavbar = () => {
    return (
        <Navbar expand="lg" bg="light" className="miNavbar">
            <Navbar.Brand href="#home">Drogueria</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#existencia">Existencia</Nav.Link>
                    <NavDropdown title="Entradas" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Nueva Entrada</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Ver entradas
                    </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Salidas" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Nueva Salida</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Ver salidas
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#action/3.3">
                        Cerrar Sesion
                    </Nav.Link>
                </Nav>        
            </Navbar.Collapse>
        </Navbar>   
    );
}