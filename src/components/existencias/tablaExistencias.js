import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ExistenciaTableRow from "./ExistenciaTableRow";

export class ExistenciasList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      existencias: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://backend-drogueria.vercel.app/existencias/")
      .then((res) => {
        this.setState({
          existencias: res.data.reverse(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.existencias.map((res, i) => {
      return <ExistenciaTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr className="table-dark">
            <th>Proveedor/Cliente</th>
            <th>Cantidad</th>
            <th>Nombre Producto</th>
            <th>Laboratorio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{this.DataTable()}</tbody>
      </Table>
    );
  }
}
