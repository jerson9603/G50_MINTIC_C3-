import React from "react";
import Button from 'react-bootstrap/Button';

import Table from "react-bootstrap/Table";

const entradas = [
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
  ["2022-11-01", 1, "Coopidrogas", 25, "Acetaminofen", 1, "2023-01-01", "MK", "Editar/Eliminar"],
];


export const TablaEntradas = () => {
    return(
        
        <div>
         <h1 className="titulo">Registro de entradas</h1>   
        <Table striped bordered hover>            
         <thead>
           <tr className="table-dark">
             <th>Fecha</th>
             <th>id Entrada</th>
             <th>Nombre Proveedor/cliente</th>
             <th>Unidades</th>
             <th>Nombre Producto</th>
             <th>Referencia Producto</th>
             <th>Vencimiento</th>
             <th>Laboratorio</th>
             <th></th>
           </tr>
         </thead>
         <tbody>
           {entradas.map((item) => (
             <tr>
               <td>{item[0]}</td>
               <td>{item[1]}</td>
               <td>{item[2]}</td>
               <td>{item[3]}</td>
               <td>{item[4]}</td>
               <td>{item[5]}</td>
               <td>{item[6]}</td>
               <td>{item[7]}</td>
               <td><Button variant="secondary" type="submit">
                Editar
            </Button>
            <Button variant="danger" type="submit">
                Eliminar
            </Button></td>
             </tr>
           ))}
         </tbody>
       </Table>
       </div>
    );
}

// export class Entradas extends Component {
//   render() {
//     return (
//       <Table striped bordered hover>
//         <thead>
//           <tr className="table-dark">
//             <th># Unidades</th>
//             <th>Nombre del Producto</th>
//             <th>Laboratorio</th>
//           </tr>
//         </thead>
//         <tbody>
//           {entradas.map((item) => (
//             <tr>
//               <td>{item[0]}</td>
//               <td>{item[1]}</td>
//               <td>{item[2]}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     );
//   }
// }
