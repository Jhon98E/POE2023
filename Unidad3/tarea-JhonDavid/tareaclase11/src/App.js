import React, { useState } from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { guardarCarro, traerTodosLosCarros } from './servicios/clienteaxios';
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

function App() {

  const [formulario, setFormulario] = useState({ 
    marca: '',
    modelo: '',
    fichatecnica: '', 
  });
  
  const [informacion, setInformacion] = useState([
    {
      'titulo': 'prueba'
    }, 
    {
      'titulo': 'prueba1'
    },
    {
      'titulo': 'prueba2'
    }
  ])

  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  const guardarDescripcion = async() => {
    await guardarCarro(formulario)
    traerTodo()
  }

  const traerTodo = async() => {
    const temporal = await traerTodosLosCarros()
    setInformacion(temporal)
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

        {
          informacion.map((elemento) => {
            return <Row>

              <Col>
                Vehiculo
              </Col>

              <Col>
                {elemento.marca}
              </Col>

              <Col>
                {elemento.modelo}
              </Col>

            </Row>
          })
        }

        <Button onClick={traerTodo}>
            Mostrar Todo
        </Button>

      </Container>

    </div>
  )
}

export default App