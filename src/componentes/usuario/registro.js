import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../styles/registro.css";

export class Registro extends Component {
  render() {
    return (
      <div id="login-container">
        <div className="form-signin text-center w-100 m-auto pt-0">
          <Form>
            <img
              className="mb-3 logo"
              src="https://cdn1.iconfinder.com/data/icons/zeon-medical-i-2/32/pharmacy_shop_drug_medicine-256.png"
              alt="logo"
            />

            <h1 className="h3 mb-3 fw-normal">Regístrate</h1>

            <Form.Group className="form-floating">
              <Form.Control
                type="text"
                id="floatingName"
                placeholder=" "
                className="form-control"
              />
              <Form.Label>Nombre</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="text"
                id="floatingLastName"
                placeholder=" "
                className="form-control"
              />
              <Form.Label>Apellido</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="email"
                id="floatingEmail"
                placeholder=" "
                className="form-control"
              />
              <Form.Label>Correo</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="password"
                id="floatingPassword"
                placeholder=" "
                className="form-control"
              />
              <Form.Label>Contraseña</Form.Label>
            </Form.Group>

            <p>
              ¿Ya estás registrado? <a href="/">Inicia sesión</a>
            </p>

            <div className="d-grid">
              <Button type="submit" className="w-100 btn btn-lg btn-success">
                Registrarse
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
