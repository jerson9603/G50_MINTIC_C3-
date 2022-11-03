import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../../styles/tablaSalidas.css';
import Container from 'react-bootstrap/Container';

const salidas = [
  ["2022-11-01", 1, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 2, "Proveedor2", 25, "Acetaminofen", 2, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 3, "Proveedor3", 25, "Acetaminofen", 3, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 4, "Proveedor1", 25, "Acetaminofen", 4, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 5, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 6, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 7, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 8, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 9, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 10, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 11, "Proveedor1", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"]
];

export const TablaSalidas = () => {
    return(
        <>
            <h1 className="titulo">Registro de salidas</h1>
            <Container fluid>
                <Table striped bordered hover>
                    <thead>
                        <tr className="table-dark">
                            <th>Fecha</th>
                            <th>id Salida</th>
                            <th>Nombre Proveedor/Cliente</th>
                            <th>Cantidad</th>
                            <th>Nombre Producto</th>
                            <th>Referencia Producto</th>
                            <th>Vencimiento</th>
                            <th>Laboratorio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {salidas.map((item) => (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>
                                    <Button variant="secondary" type="submit">
                                        Editar
                                    </Button>
                                    <Button variant="danger" type="submit">
                                        Eliminar    
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>   
        </>
    )
}
