import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "../../styles/login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeCorreoUsuario = this.onChangeCorreoUsuario.bind(this);
    this.onChangeContraseñaUsuario = this.onChangeContraseñaUsuario.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      correo: "",
      contraseña: "",
    };
  }

  onChangeCorreoUsuario(e) {
    this.setState({ correo: e.target.value });
  }
  onChangeContraseñaUsuario(e) {
    this.setState({ contraseña: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const UsuarioObject = {
      correo: this.state.correo,
      contraseña: this.state.contraseña,
    };

    const validacion = (correo, contraseña, data) => {
      let auth = false;
      data.forEach((element) => {
        if (correo === element.correo) {
          if (contraseña === element.contraseña) {
            auth = true;
          }
        }
      });
      return auth;
    };

    axios.get("http://localhost:4000/usuarios").then((res) => {
      if (
        validacion(UsuarioObject.correo, UsuarioObject.contraseña, res.data)
      ) {
        window.location = "/listaExistencias";
        alert("Validación exitosa");
      } else {
        alert("Usuario o contraseña inválidos");
      }
    });
  }

  render() {
    return (
      <div id="login-container">
        <div className="form-signin text-center w-100 m-auto pt-0">
          <Form onSubmit={this.onSubmit}>
            <h1 className="h3 mb-3 fw-normal">Inicio de sesión</h1>

            <Form.Group className="form-floating"></Form.Group>

            <Form.Group className="form-floating">
              <Form.Control
                type="email"
                id="floatingUser"
                placeholder=" "
                className="form-control"
                value={this.state.nombre}
                onChange={this.onChangeCorreoUsuario}
                required
              />
              <Form.Label>Correo</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="password"
                id="floatingPassword"
                placeholder=" "
                className="form-control"
                value={this.state.correo}
                onChange={this.onChangeContraseñaUsuario}
                required
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
