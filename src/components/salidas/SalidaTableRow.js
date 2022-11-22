import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class SalidaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteSalida = this.deleteSalida.bind(this);
    this.state = {
      show: false,
    };
  }

  deleteSalida() {
    axios
      .delete(
        "http://localhost:4000/salidas/eliminar-salida/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Salida successfully deleted!");
        window.location = "/listaSalidas";
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.obj.fechaSalida}</td>
          <td>{this.props.obj.proveedorCliente}</td>
          <td>{this.props.obj.cantidad}</td>
          <td>{this.props.obj.nombreProducto}</td>
          <td>{this.props.obj.lab}</td>
          <td>
            <Button
              onClick={() => this.setState({ show: true })}
              size="sm"
              variant="danger"
            >
              Borrar
            </Button>
          </td>
        </tr>
        <Modal
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Borrar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {'¿Esta seguro que desea borrar la salida "' +
              this.props.obj.nombreProducto +
              '"?'}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ show: false })}
            >
              Cerrar
            </Button>
            <Button variant="primary" onClick={this.deleteSalida}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
