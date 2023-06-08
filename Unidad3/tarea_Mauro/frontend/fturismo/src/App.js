import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { hacerPeticion } from './servicios/clienteaxios';

function App() {

  const [formulario, setformulario] = useState({
    nombre: '',
    pais: '',
    descripcion: ''
  });

  const handleChange = (event) => {
    const temporal = {...formulario} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setformulario(temporal)
  }

  const guardarLugar = () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <div class="container">
        <form id="formulario">
        <h3>DiscoverPlaces</h3>
          <div class="row">

            <div class="col">

              <Form.Group className="mb-3">
                <Form.Text className="text-muted"># Ingrese los datos del lugar turistico</Form.Text>
                <br></br>
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleChange} name="nombre" placeholder="Ingrese el nombre"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Pais</Form.Label>
                <Form.Control onChange={handleChange} name="pais" placeholder="Ingrese el pais perteneciente"></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Descripcion</Form.Label>
                <Form.Control onChange={handleChange} name="descripcion" placeholder="Ingrese una descripcion"></Form.Control>
              </Form.Group>
              <Button onClick={guardarLugar}>
                Guardar Lugar
              </Button>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
