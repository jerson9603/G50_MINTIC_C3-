import React, {Component} from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/components/entradaForm.css';

export class EditSalida extends Component {
    constructor(props) {
        super(props);
    
        this.onChangeProvCliName = this.onChangeProvCliName.bind(this);
        this.onChangeCantidad = this.onChangeCantidad.bind(this);
        this.onChangeNombreProd = this.onChangeNombreProd.bind(this);
        this.onChangeVencimiento = this.onChangeVencimiento.bind(this);
        this.onChangeLab = this.onChangeLab.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            proveedorCliente: "",
            cantidad: "",
            nombreProducto: "",
            vencimiento: "",
            lab: "",
        };
    } 

    componentDidMount() {
        axios
            .get(
                "http://localhost:4000/salidas/obtener-salida/" + 
                this.props.match.params.id
            )
            .then((res) => {
                this.setState({
                    proveedorCliente: res.data.proveedorCliente,
                    cantidad: res.data.cantidad,
                    nombreProducto: res.data.nombreProducto,
                    vencimiento: res.data.vencimiento,
                    lab: res.data.lab,
                });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    onChangeProvCliName(e) {
        this.setState({ proveedorCliente: e.target.value });
    }

    onChangeCantidad(e) {
        this.setState({ cantidad: e.target.value });
    }

    onChangeNombreProd(e) {
        this.setState({ nombreProducto: e.target.value });
    }

    onChangeVencimiento(e) {
        this.setState({ vencimiento: e.target.value });
    }

    onChangeLab(e) {
        this.setState({ lab: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const salidaObject = {
            proveedorCliente: this.state.proveedorCliente,
            cantidad: this.state.cantidad,
            nombreProducto: this.state.nombreProducto,
            vencimiento: this.state.vencimiento,
            lab: this.state.lab,
        };

        axios
            .put(
                "http://localhost:4000/salidas/actualizar-salida/" +
                this.props.match.params.id,
            salidaObject    
            )
            .then((res) => {
                console.log(res.data);
                console.log("Salida actualizada correctamente");
            })
            .catch((error) => {
                console.log(error);
            });

        window.location = "/listaSalidas";    
    }

    render() {
        return(
            <>
            <h1 className="titulo">Editar Salida</h1>
            <Form className="salidaForm" onSubmit={this.onSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre Proveedor/Cliente</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={this.state.proveedorCliente}
                        onChange={this.onChangeProvCliName}
                        required
                     />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control 
                        type="number"
                        value={this.state.cantidad}
                        onChange={this.onChangeCantidad}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre Producto</Form.Label>
                    <Form.Control
                        type="text"
                        value={this.state.nombreProducto}
                        onChange={this.onChangeNombreProd}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha de Vencimiento</Form.Label>
                    <Form.Control
                        type="date"
                        value={this.state.vencimiento}
                        onChange={this.onChangeVencimiento}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Laboratorio</Form.Label>
                    <Form.Control
                        type="text"
                        value={this.state.lab}
                        onChange={this.onChangeLab}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button>
                <Button 
                    href={"/listaSalidas"}
                    variant="info"
                >
                    Volver
                </Button>
            </Form>
            </>
        );
    }
}