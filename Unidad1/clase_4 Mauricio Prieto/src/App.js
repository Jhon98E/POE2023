import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Col';
import Col from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import { useState } from 'react';


function App() {

  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const temporal = {...formulario}
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }
  
  return (
    <div className="App">
      <div class="Container">
        <div class="Form">
        <h3>Calculadora</h3>
          <div class="row">

            <div class="col">

              <Form.Group className="mb-3">
                <Form.Text className="text-muted"># Ingrese dos numeros</Form.Text>
                <br></br>
                <Form.Label>Numero 1</Form.Label>
                <Form.Control onChange={handleChange} name="numero 1" type="numero" placeholder="Ingrese el numero 1"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Numero 2</Form.Label>
                <Form.Control onChange={handleChange} name="numero 2" type="numero" placeholder="Ingrese el numero 2"></Form.Control>
              </Form.Group>

              <Button>Realizar Operacion</Button>

            </div>

            <div class="col">
              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control onChange={handleChange} name="Suma" type="resultado" placeholder="Suma"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Resta</Form.Label>
                <Form.Control onChange={handleChange} name="Resta" type="resultado" placeholder="Resta"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Multiplicacion</Form.Label>
                <Form.Control onChange={handleChange} name="Multiplicacion" type="resultado" placeholder="Multiplicacion"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Division</Form.Label>
                <Form.Control onChange={handleChange} name="Division" type="resultado" placeholder="Division"></Form.Control>
              </Form.Group>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
