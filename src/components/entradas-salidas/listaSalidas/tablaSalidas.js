import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import SalidaTableRow from "./SalidaTableRow";

export class SalidasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salidas: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/salidas/")
      .then((res) => {
        this.setState({
          salidas: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.salidas.map((res, i) => {
      return <SalidaTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha Salida</th>
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
