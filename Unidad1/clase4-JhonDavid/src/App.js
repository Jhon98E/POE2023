import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';        


function App() {

  const [formulario, setformulario] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const temporal = {...formulario}
    temporal[event.target.name] = event.target.value
    setformulario(temporal)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <h3>CALCULADORA</h3>
          <Row>            
            <Col>
              <Form.Group>
                <Form.Label>NUMERO 1</Form.Label>
                <Form.Control placeholder="Ingrese un Numero"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>NUMERO 2</Form.Label>
                <Form.Control placeholder="Ingrese un Numero"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>RESULTADO</Form.Label>
                <Form.Control placeholder=""></Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group>
                <Form.Label>SUMA</Form.Label>
                <Form.Control placeholder="+"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>RESTA</Form.Label>
                <Form.Control placeholder="-"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>MULTIPLICACION</Form.Label>
                <Form.Control placeholder="*"></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>DIVISION</Form.Label>
                <Form.Control placeholder="/"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
