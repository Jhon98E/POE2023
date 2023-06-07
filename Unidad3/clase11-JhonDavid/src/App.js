import React, { useState } from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {hacerPeticion} from './servicios/Clienteaxios'
import { Button, Form, Container } from 'react-bootstrap'

function App() {

  const [formulario, setFormulario] = useState({ 
    titulo: '',
    resumen: '' 
  });
  
  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  const guardarLibro = () => {
    hacerPeticion(formulario)
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control onChange={handleChange} name="titulo" placeholder="titulo"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Resumen</Form.Label>
            <Form.Control onChange={handleChange} name="resumen" placeholder="resumen" />
          </Form.Group>
          {formulario.email}
          {formulario.password}
          <Button onClick={guardarLibro}>
            Guardar Libro
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default App