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
        <NavDropdown title="Salidas" id="collasible-nav-dropdown">
          <NavDropdown.Item href="/nuevaSalida">Nueva Salida</NavDropdown.Item>
          <NavDropdown.Item href="/listaSalidas">Ver salidas</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <NavBarButton />
      </Nav>
    </Navbar.Collapse>
  );
};
