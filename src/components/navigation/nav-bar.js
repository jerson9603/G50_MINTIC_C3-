import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../styles/components/miNavbar.css";

export const NavBar = () => {
  const cerrarSesion = () => {
    localStorage.setItem("authenticated", "false");
  };

  return (
    <Navbar expand="lg" bg="light" className="miNavbar">
      <Navbar.Brand href="/home">Drogueria</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto"> {/* //TODO Reutilizar código */}
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
            <NavDropdown.Item href="/nuevaSalida">
              Nueva Salida
            </NavDropdown.Item>
            <NavDropdown.Item href="/listaSalidas">
              Ver salidas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/" onClick={cerrarSesion}> {/* //TODO Separar como componnente */}
            Cerrar Sesion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
