import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './servicios/clienteAxios'
import { doRequest } from './servicios/clienteAxios.js';

function App() {

  const [formulario, setformulario] = useState({
    titulo: '',
    resumen: ''
  });

  const handleChange = (event) => {
    const temporal = {...formulario} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setformulario(temporal)
  }

  const guardarLibro = () => {
    doRequest(formulario)
  }

  return (
    <div className="App">
      <div class="container">
        <form id="formulario">
        <h3>Libreria</h3>
          <div class="row">

            <div class="col">

              <Form.Group className="mb-3">
                <Form.Text className="text-muted"># Ingrese los datos del libro</Form.Text>
                <br></br>
                <Form.Label>Titulo</Form.Label>
                <Form.Control onChange={handleChange} name="titulo" placeholder="Ingrese titulo"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Resumen</Form.Label>
                <Form.Control onChange={handleChange} name="resumen" placeholder="Ingrese el resumen"></Form.Control>
              </Form.Group>
              <Button onClick={guardarLibro}>
                Guargar Libro
              </Button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
