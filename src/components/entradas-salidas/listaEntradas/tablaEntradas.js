import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import EntradaTableRow from "./EntradaTableRow";

export class EntradasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entradas: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/entradas/")
      .then((res) => {
        this.setState({
          entradas: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.entradas.map((res, i) => {
      return <EntradaTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha Entrada</th>
              <th>Proveedor/Cliente</th>
              <th>Cantidad</th>
              <th>Nombre Producto</th>
              <th>Vencimiento</th>
              <th>Laboratorio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
