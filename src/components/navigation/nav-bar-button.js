import React from "react";
import Button from "react-bootstrap/Button";

export const NavBarButton = () => {
  const cerrarSesion = () => {
    localStorage.setItem("authenticated", "false");
  };

  return (
    <Button href="/" variant="outline-dark" size="sm" onClick={cerrarSesion}>
      Cerrar Sesión
    </Button>
  );
};
