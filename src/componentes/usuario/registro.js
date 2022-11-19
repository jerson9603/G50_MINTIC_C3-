import React, { Component } from "react";
import axios from "axios";
// toDo: No olvidar

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import swal from "sweetalert";

import "../../styles/registro.css";

export class Registro extends Component {
  constructor(props) {
    super(props);

    this.onChangeNombreUsuario = this.onChangeNombreUsuario.bind(this);
    this.onChangeApellidoUsuario = this.onChangeApellidoUsuario.bind(this);
    this.onChangeCorreoUsuario = this.onChangeCorreoUsuario.bind(this);
    this.onChangeContraseñaUsuario = this.onChangeContraseñaUsuario.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nombre: "",
      apellido: "",
      correo: "",
      contraseña: "",
    };
  }

  onChangeNombreUsuario(e) {
    this.setState({ nombre: e.target.value });
  }
  onChangeApellidoUsuario(e) {
    this.setState({ apellido: e.target.value });
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
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      correo: this.state.correo,
      contraseña: this.state.contraseña,
    };

    axios
      .post("http://localhost:4000/usuarios/crear-usuario", UsuarioObject)
      .then(() => {
        swal({
          title: "¡Correcto!",
          text: "Usuario creado con éxito",
          icon: "success",
          timer: 2350,
          button: "Listo",
        }).then(() => {
          window.location = "/";
          return;
        });
      });

    swal({
      title: "¡Atención!",
      text: "Ya te encuentras registrado",
      icon: "info",
      timer: 2350,
      button: "Listo",
    });
  }

  render() {
    return (
      <div id="login-container">
        <div className="form-signin text-center w-100 m-auto pt-0">
          <Form onSubmit={this.onSubmit}>
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
                value={this.state.nombre}
                onChange={this.onChangeNombreUsuario}
                required
              />
              <Form.Label>Nombre</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="text"
                id="floatingLastName"
                placeholder=" "
                className="form-control"
                value={this.state.apellido}
                onChange={this.onChangeApellidoUsuario}
                required
              />
              <Form.Label>Apellido</Form.Label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control
                type="email"
                id="floatingEmail"
                placeholder=" "
                className="form-control"
                value={this.state.correo}
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
                value={this.state.contraseña}
                onChange={this.onChangeContraseñaUsuario}
                required
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
