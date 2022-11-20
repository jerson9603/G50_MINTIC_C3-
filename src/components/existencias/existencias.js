import React, { Component } from "react";

import Table from "react-bootstrap/Table";

const existencias = [
  [210, "Nombre del producto", "Laboratorio"],
  [220, "Nombre del producto", "Laboratorio"],
  [230, "Nombre del producto", "Laboratorio"],
  [240, "Nombre del producto", "Laboratorio"],
  [250, "Nombre del producto", "Laboratorio"],
  [260, "Nombre del producto", "Laboratorio"],
  [210, "Nombre del producto", "Laboratorio"],
  [220, "Nombre del producto", "Laboratorio"],
  [230, "Nombre del producto", "Laboratorio"],
  [240, "Nombre del producto", "Laboratorio"],
  [250, "Nombre del producto", "Laboratorio"],
  [260, "Nombre del producto", "Laboratorio"],
  [210, "Nombre del producto", "Laboratorio"],
  [220, "Nombre del producto", "Laboratorio"],
  [230, "Nombre del producto", "Laboratorio"],
  [240, "Nombre del producto", "Laboratorio"],
  [250, "Nombre del producto", "Laboratorio"],
  [260, "Nombre del producto", "Laboratorio"],
];

export class Existencias extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr className="table-dark">
            <th># Unidades</th>
            <th>Nombre del Producto</th>
            <th>Laboratorio</th>
          </tr>
        </thead>
        <tbody>
          {existencias.map((item) => (
            <tr>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
              <td>{item[2]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
