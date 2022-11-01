import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../styles/entradaForm.css';

export const EntradaForm = () => {
    return(
        <>
        <h1 className="titulo">Nueva Entrada</h1>
        <Form className="entradaForm">
            <Form.Group className="mb-3">
                <Form.Label>Nombre Cliente</Form.Label>
                <Form.Control type="text" placeholder="Proveedor/Cliente" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Cantidad</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Guardar
            </Button>
            <Button variant="info">
                Info
            </Button>
        </Form>
        </>
    );
}