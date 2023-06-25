import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button, Row, Col, Stack } from 'react-bootstrap'

function App() {
  return (
    <Container> 
      <Form>
      <h1>REGISTRATE</h1>
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Form.Label>Nombres</Form.Label>
            <Form.Control size='lg' placeholder="Registra Tu Nombre" ></Form.Control>
          </Col>
          <Col xs={4}>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control size='lg' placeholder="Registra tu Apellido" ></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={4}>
            <Form.Label>Usuario</Form.Label>
            <Form.Control size='lg' placeholder="Registra tu Usuario" ></Form.Control>
          </Col>
          <Col xs={4}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control size='lg' type='Password' placeholder="Registra tu Contraseña" ></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Stack className="col-md-2 mx-auto">
          <Button size='lg' as="a" variant="dark">
            Registrarte
          </Button>
        </Stack>
      </Form>
    </Container>
  );
}

export default App;
