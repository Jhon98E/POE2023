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
      <Container>
        <Form>
          <Row>

            <Col>

              <Form.Group className="mb-3">
                <h3>Calculadora</h3>
                <Form.Text className="text-muted"># Ingrese dos numeros</Form.Text>
                <br></br>
                <Form.Label>Numero 1</Form.Label>
                <Form.Control onChange={handleChange} name="numero 1" type="numero" placeholder="Ingrese el numero 1" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={handleChange} name="numero 2" type="numero" placeholder="Ingrese el numero 2" />
              </Form.Group>

            </Col>

            <Col>
              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control onChange={handleChange} name="Suma" type="resultado" placeholder="Suma" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control onChange={handleChange} name="Resta" type="resultado" placeholder="Resta" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control onChange={handleChange} name="Multiplicacion" type="resultado" placeholder="Multiplicacion" />
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control onChange={handleChange} name="Division" type="resultado" placeholder="Division" />
              </Form.Group>

            </Col>

          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
