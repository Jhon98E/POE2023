import React, { useState } from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { hacerPeticion } from './servicios/clienteaxios';
import { Button, Form, Container } from 'react-bootstrap'

function App() {

  const [formulario, setFormulario] = useState({ 
    marca: '',
    modelo: '',
    fichatecnica: '', 
  });
  
  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  const guardarDescripcion = () => {
    hacerPeticion(formulario)
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>MARCA</Form.Label>
            <Form.Control onChange={handleChange} name="marca" placeholder="Ingrese la marca"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>MODELO</Form.Label>
            <Form.Control onChange={handleChange} name="modelo" placeholder="Ingrese el modelo" />
          </Form.Group>
          <Form.Group>
            <Form.Label>FICHA TECNICA</Form.Label>
            <Form.Control onChange={handleChange} name="fichatecnica" placeholder="Ingrese la ficha tecnica" />
          </Form.Group>
          <Button onClick={guardarDescripcion}>
            Guardar Descripción
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default App