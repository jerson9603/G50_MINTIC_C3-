import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class SalidaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteSalida = this.deleteSalida.bind(this);
  }

  deleteSalida() {
    axios
      .delete(
        "http://localhost:4000/salidas/eliminar-salida/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Salida successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.fechaSalida}</td>
        <td>{this.props.obj.proveedorCliente}</td>
        <td>{this.props.obj.cantidad}</td>
        <td>{this.props.obj.nombreProducto}</td>
        <td>{this.props.obj.vencimiento}</td>
        <td>{this.props.obj.lab}</td>
        <td>
          <Link 
            className="edit-link"
            path={"product/:id"}
            to={"/actualizar-salida/" + this.props.obj._id}
          >
            Editar  
          </Link>
          <Button onClick={this.deleteSalida} size="sm" variant="danger" className="ml-2">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
