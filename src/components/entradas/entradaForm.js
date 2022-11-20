import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/components/esForm.css";

export class CreateEntrada extends Component {
  constructor(props) {
    super(props);

    this.onChangeFechaEntrada = this.onChangeFechaEntrada.bind(this);
    this.onChangeProvCliName = this.onChangeProvCliName.bind(this);
    this.onChangeCantidad = this.onChangeCantidad.bind(this);
    this.onChangeNombreProd = this.onChangeNombreProd.bind(this);
    this.onChangeVencimiento = this.onChangeVencimiento.bind(this);
    this.onChangeLab = this.onChangeLab.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    var d = new Date();
    var todayDate =
      d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();
    this.state = {
      fechaEntrada: todayDate, // toDo: change to todays date
      proveedorCliente: "",
      cantidad: "",
      nombreProducto: "",
      vencimiento: "",
      lab: "",
    };
  }

  onChangeFechaEntrada(e) {
    this.setState({ fechaEntrada: "test" }); // toDo: change to todays date
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
  onChangeVencimiento(e) {
    this.setState({ vencimiento: e.target.value });
  }
  onChangeLab(e) {
    this.setState({ lab: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const EntradaObject = {
      fechaEntrada: this.state.fechaEntrada,
      proveedorCliente: this.state.proveedorCliente,
      cantidad: this.state.cantidad,
      nombreProducto: this.state.nombreProducto,
      vencimiento: this.state.vencimiento,
      lab: this.state.lab,
    };

    axios
      .post("http://localhost:4000/entradas/crear-entrada", EntradaObject)
      .then((res) => console.log(res.data))
      .then(() => {
        window.location = "/listaEntradas";
      });
    this.setState({
      fechaEntrada: "",
      proveedorCliente: "",
      cantidad: "",
      nombreProducto: "",
      vencimiento: "",
      lab: "",
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
          <Form.Group controlId="vencimiento" className="mb-4">
            <Form.Label>Fecha de vencimiento</Form.Label>
            <Form.Control
              type="date"
              placeholder="Fecha de vencimiento"
              value={this.state.vencimiento}
              onChange={this.onChangeVencimiento}
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
