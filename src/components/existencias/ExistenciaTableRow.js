import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class ExistenciaTableRow extends Component {
  constructor(props) {
    super(props);
    this.venta = this.venta.bind(this);
    this.compra = this.compra.bind(this);
    this.onChangeCantidadV = this.onChangeCantidadV.bind(this);
    this.onChangeCantidadC = this.onChangeCantidadC.bind(this);
    this.state = {
      showV: false,
      showC: false,
      cantidad: "",
      cantidadV: "",
      cantidadC: "",
    };
  }

  onChangeCantidadV(e) {
    this.setState({ cantidadV: e.target.value });
  }
  onChangeCantidadC(e) {
    this.setState({ cantidadC: e.target.value });
  }

  venta() {
    axios
      .get(
        "http://localhost:4000/existencias/obtener-existencia/" +
          this.props.obj._id
      )
      .then((res) => {
        const salidaObject = {
          proveedorCliente: res.data.proveedorCliente,
          cantidad: this.state.cantidadV,
          nombreProducto: res.data.nombreProducto,
          vencimiento: res.data.vencimiento,
          lab: res.data.lab,
        };
        this.setState({ cantidad: res.data.cantidad - this.state.cantidadV });
        const ventaObject = {
          cantidad: this.state.cantidad,
        };
        axios
          .put(
            "http://localhost:4000/existencias/actualizar-existencia/" +
              this.props.obj._id,
            ventaObject
          )
          .then(() => {
            axios.post(
              "http://localhost:4000/salidas/crear-salida/",
              salidaObject
            );
            window.location = "/home";
            return;
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  compra() {
    console.log(this.props);
    axios
      .get(
        "http://localhost:4000/existencias/obtener-existencia/" +
          this.props.obj._id
      )
      .then((res) => {
        const entradaObject = {
          proveedorCliente: res.data.proveedorCliente,
          cantidad: this.state.cantidadC,
          nombreProducto: res.data.nombreProducto,
          vencimiento: res.data.vencimiento,
          lab: res.data.lab,
        };
        this.setState({ cantidad: res.data.cantidad + this.state.cantidadC });
        const compraObject = {
          cantidad: this.state.cantidad,
        };
        axios
          .put(
            "http://localhost:4000/existencias/actualizar-existencia/" +
              this.props.obj._id,
            compraObject
          )
          .then(() => {
            axios.post(
              "http://localhost:4000/entradas/crear-entrada/",
              entradaObject
            );
            console.log("Done", compraObject, entradaObject)
            window.location = "/home";
            return;
          })
          .catch((error) => {
            console.log(error);
          });
      });
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.obj.proveedorCliente}</td>
          <td>{this.props.obj.cantidad}</td>
          <td>{this.props.obj.nombreProducto}</td>
          <td>{this.props.obj.vencimiento}</td>
          <td>{this.props.obj.lab}</td>
          <td>
            <Button
              onClick={() => this.setState({ showV: true })}
              size="sm"
              className="me-2"
              variant="success"
            >
              Vender
            </Button>
            <Button
              onClick={() => this.setState({ showC: true })}
              size="sm"
              className="me-2"
              variant="warning"
            >
              Compra
            </Button>
          </td>
        </tr>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showV}
          onHide={() => this.setState({ showV: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Vender</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="cantidadV" className="mb-4">
              <Form.Label>
                {'Unidades de "' + this.props.obj.nombreProducto + '" a vender'}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Cantidad"
                value={this.state.cantidadV}
                onChange={this.onChangeCantidadV}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showV: false })}
            >
              Cancelar
            </Button>
            <Button variant="success" onClick={this.venta}>
              Hecho
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showC}
          onHide={() => this.setState({ showC: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Entrada</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="cantidadC" className="mb-4">
              <Form.Label>
                {'Unidades de "' +
                  this.props.obj.nombreProducto +
                  '" a comprar'}
              </Form.Label>
              <Form.Control
                type="number"
                placeholder="Cantidad"
                value={this.state.cantidadC}
                onChange={this.onChangeCantidadC}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showC: false })}
            >
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.venta}>
              Hecho
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
