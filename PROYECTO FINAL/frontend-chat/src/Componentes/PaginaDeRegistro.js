import { Container, Form, Button, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaginaDeRegistro() {
  return (
    <Container> 
      <Form>
      <h1 class='text-center'>REGISTRATE</h1>      
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <Form.Label>Nombres</Form.Label>
            <Form.Control size='lg' placeholder="Registra Tu Nombre" ></Form.Control>
          </Col>
          <Col xs={3}>
            <Form.Label>Apellidos</Form.Label>
            <Form.Control size='lg' placeholder="Registra tu Apellido" ></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Row className="justify-content-md-center">
          <Col xs={3}>
            <Form.Label>Usuario</Form.Label>
            <Form.Control size='lg' placeholder="Registra tu Usuario" ></Form.Control>
          </Col>
          <Col xs={3}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control size='lg' type='Password' placeholder="Registra tu Contraseña" ></Form.Control>
          </Col>
        </Row>
        <p></p>
        <Stack className="col-md-2 mx-auto">
          <Link to='/'>
            <Button size='lg' variant="dark">
              Registrarte
            </Button>
          </Link>
        </Stack>
      </Form>
    </Container>
  );
}

export default PaginaDeRegistro;