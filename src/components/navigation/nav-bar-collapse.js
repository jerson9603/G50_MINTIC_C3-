import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavBarButton } from "./nav-bar-button";

export const NavBarCollapse = () => {
  return (
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Existencia</Nav.Link>
        <NavDropdown title="Entradas" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/nuevaEntrada">
            Nueva Entrada
          </NavDropdown.Item>
          <NavDropdown.Item href="/listaEntradas">
            Ver entradas
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/listaSalidas">Salidas</Nav.Link>
      </Nav>
      <Nav>
        <NavBarButton />
      </Nav>
    </Navbar.Collapse>
  );
};
