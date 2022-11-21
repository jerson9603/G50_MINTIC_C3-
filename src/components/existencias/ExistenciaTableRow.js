import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class ExistenciaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteExistencia = this.deleteExistencia.bind(this);
    this.ventaExistencia = this.ventaExistencia.bind(this);
    this.onChangeCantidadV = this.onChangeCantidadV.bind(this);
    this.state = {
      showD: false,
      showV: false,
      cantidad: "",
      cantidadV: "",
    };
  }

  deleteExistencia() {
    axios
      .delete(
        "http://localhost:4000/existencias/eliminar-existencia/" +
          this.props.obj._id
      )
      .then(() => {
        window.location = "/home";
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeCantidadV(e) {
    this.setState({ cantidadV: e.target.value });
  }

  ventaExistencia() {
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

  render() {
    return (
      <>
        <tr>
          <td>{this.props.obj.proveedorCliente}</td>
          <td>{this.props.obj.cantidad}</td>
          <td>{this.props.obj.nombreProducto}</td>
          <td>{this.props.obj.lab}</td>
          <td>
            <Button
              onClick={() => this.setState({ showV: true })}
              size="sm"
              className="me-2"
              variant="success"
            >
              Venta
            </Button>
            <Button
              href={"/editarEntrada/" + this.props.obj._id}
              size="sm"
              className="me-2"
              variant="warning"
            >
              Compra
            </Button>
            <Button
              href={"/editarEntrada/" + this.props.obj._id}
              size="sm"
              className="me-2"
            >
              Editar
            </Button>
            <Button
              onClick={() => this.setState({ showD: true })}
              size="sm"
              variant="danger"
            >
              Borrar
            </Button>
          </td>
        </tr>
        <Modal
          show={this.state.showD}
          onHide={() => this.setState({ showD: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Borrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {'¿Esta seguro que desea borrar el producto "' +
              this.props.obj.nombreProducto +
              '"?'}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showD: false })}
            >
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.deleteExistencia}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.showV}
          onHide={() => this.setState({ showV: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Borrar</Modal.Title>
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
            <Button variant="success" onClick={this.ventaExistencia}>
              Vender
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
