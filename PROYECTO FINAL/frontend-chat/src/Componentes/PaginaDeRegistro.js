import React, { useState } from 'react';
import { guardarUsuario } from '../Servicios/ClienteAxios';
import { Container, Form, Button, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaginaDeRegistro() {

  const [formulario, setFormulario] = useState({ 
    nombre: '',
    apellido: '',
    usuario: '',
    contrasenia: '', 
  });

  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  const guardarNuevoUsuario = async() => {
    await guardarUsuario(formulario)
  }

  return (
    <Container> 
      <Form>
      <h1 class='text-center'>REGISTRATE</h1>      
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <Form.Label>Nombres</Form.Label>
            <Form.Control size='lg' onChange={handleChange} name='nombre' placeholder="Registra Tu Nombre"></Form.Control>
          </Col>
          <Col xs={3}>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control size='lg' onChange={handleChange} name='nombre' placeholder="Registra tu Apellido"Ñ></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <Form.Label>Usuario</Form.Label>
            <Form.Control size='lg' onChange={handleChange} name='usuario' placeholder="Registra tu Usuario"></Form.Control>
          </Col>
          <Col xs={3}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control size='lg' type='Password' onChange={handleChange} name='contrasenia' placeholder="Registra tu Contraseña"></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Stack className="col-md-2 mx-auto">
          <Link to='/'>
            <Button size='lg' variant="dark" onClick={guardarNuevoUsuario}>
              Registrarte
            </Button>
          </Link>
        </Stack>
      </Form>
    </Container>
  );
}

export default PaginaDeRegistro;