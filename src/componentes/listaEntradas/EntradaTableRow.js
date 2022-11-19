import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class EntradaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteEntrada = this.deleteEntrada.bind(this);
  }

  deleteEntrada() {
    axios
      .delete(
        "http://localhost:4000/entradas/eliminar-entrada/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Entrada successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.fechaEntrada}</td>
        <td>{this.props.obj.proveedorCliente}</td>
        <td>{this.props.obj.cantidad}</td>
        <td>{this.props.obj.nombreProducto}</td>
        <td>{this.props.obj.vencimiento}</td>
        <td>{this.props.obj.lab}</td>
        <td>
          <Link 
            className="edit-link"
            path={"product/:id"}
            to={"/actualizar-entrada/" + this.props.obj._id}
          >
            Editar  
          </Link>
          <Button onClick={this.deleteEntrada} size="sm" variant="danger" className="ml-2">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
