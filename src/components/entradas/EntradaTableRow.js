import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class EntradaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteEntrada = this.deleteEntrada.bind(this);
    this.state = {
      show: false,
    };
  }

  deleteEntrada() {
    axios
      .delete(
        "http://localhost:4000/entradas/eliminar-entrada/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Entrada successfully deleted!");
        window.location = "/listaEntradas";
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
          <td>{this.props.obj.fechaEntrada}</td>
          <td>{this.props.obj.proveedorCliente}</td>
          <td>{this.props.obj.cantidad}</td>
          <td>{this.props.obj.nombreProducto}</td>
          <td>{this.props.obj.vencimiento}</td>
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
            {'¿Esta seguro que desea borrar la entrada "' +
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
            <Button variant="primary" onClick={this.deleteEntrada}>
              Borrar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
