import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/components/esForm.css";

export class CreateEntrada extends Component {
  constructor(props) {
    super(props);

    this.onChangeProvCliName = this.onChangeProvCliName.bind(this);
    this.onChangeCantidad = this.onChangeCantidad.bind(this);
    this.onChangeNombreProd = this.onChangeNombreProd.bind(this);
    this.onChangeLab = this.onChangeLab.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      proveedorCliente: "",
      cantidad: "",
      nombreProducto: "",
      lab: "",
    };
  }

  onChangeProvCliName(e) {
    this.setState({ proveedorCliente: e.target.value });
  }
  onChangeCantidad(e) {
    this.setState({ cantidad: e.target.value });
  }
  onChangeNombreProd(e) {
    this.setState({ nombreProducto: e.target.value });
  }
  onChangeLab(e) {
    this.setState({ lab: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const EntradaObject = {
      proveedorCliente: this.state.proveedorCliente,
      cantidad: this.state.cantidad,
      nombreProducto: this.state.nombreProducto,
      lab: this.state.lab,
    };

    axios
      .post("http://localhost:4000/existencias/crear-existencia", EntradaObject)
      .then(() => {
        axios
          .post("http://localhost:4000/entradas/crear-entrada", EntradaObject)
          .then(() => {
            window.location = "/listaEntradas";
          });
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="titulo mt-5">Nueva Entrada</h1>
        <Form onSubmit={this.onSubmit} className="formA">
          {/* toDo: tal vez agregar fecha aqui */}
          <Form.Group controlId="ProveedorCliente" className="mb-4">
            <Form.Label>Nombre Proveedor/Cliente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Proveedor/Cliente"
              value={this.state.proveedorCliente}
              onChange={this.onChangeProvCliName}
              required
            />
          </Form.Group>
          <Form.Group controlId="cantidad" className="mb-4">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Cantidad"
              value={this.state.cantidad}
              onChange={this.onChangeCantidad}
              required
            />
          </Form.Group>
          <Form.Group controlId="nombreProducto" className="mb-4">
            <Form.Label>Nombre del Producto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre del Producto"
              value={this.state.nombreProducto}
              onChange={this.onChangeNombreProd}
              required
            />
          </Form.Group>

          <Form.Group controlId="lab" className="mb-4">
            <Form.Label>Laboratorio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Laboratorio"
              value={this.state.lab}
              onChange={this.onChangeLab}
              required
            />
          </Form.Group>
          <div className="buttons">
            <Button variant="primary" type="submit" className="mb-1 mt-3">
              Guardar
            </Button>
            <Button href={"/listaEntradas"} variant="info">
              Volver
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}
