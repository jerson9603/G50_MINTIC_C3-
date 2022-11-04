import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import '../../styles/login.css'

export class Login extends Component {
  render() {
    return (
        <div className="form-signin text-center w-100 m-auto">
          <Form>
            
    
            <h1 className="h3 mb-3 fw-normal">Inicio de sesión</h1>
    
            <Form.Group className="form-floating">
              
            </Form.Group>
      
            <Form.Group className="form-floating">
              <Form.Control type="email" id="floatingEmail" placeholder="placeholder" className="form-control" />
              <label>Usuario</label>
            </Form.Group>
            <Form.Group className="form-floating">
              <Form.Control type="password" id="floatingPassword" placeholder="placeholder" className="form-control" />
              <label>Contraseña</label>
            </Form.Group>
                
            <p>¿Olvidó su contraseña? <a href="/">Restablecer</a></p>
    
            <div className="d-grid">
              <Button type="submit" className="w-100 btn btn-lg btn-success">Entrar</Button>
            </div>
          </Form>
        </div>
      );
  }
}
