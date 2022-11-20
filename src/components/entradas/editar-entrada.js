import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../styles/components/entradaForm.css";
import { PageLayout } from "../../components/page-layout";

export default class EditEntrada extends Component {
  constructor(props) {
    super(props);

    this.onChangeProvCliName = this.onChangeProvCliName.bind(this);
    this.onChangeCantidad = this.onChangeCantidad.bind(this);
    this.onChangeNombreProd = this.onChangeNombreProd.bind(this);
    this.onChangeVencimiento = this.onChangeVencimiento.bind(this);
    this.onChangeLab = this.onChangeLab.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      proveedorCliente: "",
      cantidad: "",
      nombreProducto: "",
      vencimiento: "",
      lab: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/entradas/obtener-entrada/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          proveedorCliente: res.data.proveedorCliente,
          cantidad: res.data.cantidad,
          nombreProducto: res.data.nombreProducto,
          vencimiento: res.data.vencimiento,
          lab: res.data.lab,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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

    const entradaObject = {
      proveedorCliente: this.state.proveedorCliente,
      cantidad: this.state.cantidad,
      nombreProducto: this.state.nombreProducto,
      vencimiento: this.state.vencimiento,
      lab: this.state.lab,
    };

    axios
      .put(
        "http://localhost:4000/entradas/actualizar-entrada/" +
          this.props.match.params.id,
        entradaObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Entrada actualizada correctamente");
      })
      .catch((error) => {
        console.log(error);
      });

    window.location = "/listaEntradas";
  }

  render() {
    return (
      <PageLayout>
        <h1 className="titulo">Editar Entrada</h1>
        <Form className="entradaForm" onSubmit={this.onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Proveedor/Cliente</Form.Label>
            <Form.Control
              type="text"
              value={this.state.proveedorCliente}
              onChange={this.onChangeProvCliName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              type="number"
              value={this.state.cantidad}
              onChange={this.onChangeCantidad}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              type="text"
              value={this.state.nombreProducto}
              onChange={this.onChangeNombreProd}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha de Vencimiento</Form.Label>
            <Form.Control
              type="date"
              value={this.state.vencimiento}
              onChange={this.onChangeVencimiento}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Laboratorio</Form.Label>
            <Form.Control
              type="text"
              value={this.state.lab}
              onChange={this.onChangeLab}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          <Button href={"/listaEntradas"} variant="info">
            Volver
          </Button>
        </Form>
      </PageLayout>
    );
  }
}
