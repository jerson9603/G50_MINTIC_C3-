import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../styles/login.css";

export class Login extends Component {
  render() {
    return (
      <div id="login-container">
        <div className="form-signin text-center w-100 m-auto pt-0">
          <Form>
            <h1 className="h3 mb-3 fw-normal">Inicio de sesión</h1>

            <Form.Group className="form-floating"></Form.Group>

            <Form.Group className="form-floating">
              <Form.Control
                type="email"
                id="floatingUser"
                placeholder=" "
                className="form-control"
              />
              <Form.Label>Usuario</Form.Label>
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
              ¿Eres nuevo por aquí? <a href="/registrarse">Regístrate</a>
            </p>

            <div className="d-grid">
              <Button type="submit" className="w-100 btn btn-lg btn-success ">
                Entrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
