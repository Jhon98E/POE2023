import { Container, Form, Button, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaginaDeLogin() {
    return (
      <Container> 
        <Form>
        <h1 class='text-center'>INICIA SESIÓN</h1>
          <p></p>
          <Row className="justify-content-md-center">
            <Col xs={4}>
              <Form.Label>Usuario</Form.Label>
              <Form.Control size='lg' placeholder="Ingresa tu Usuario" ></Form.Control>
              <p></p>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control size='lg' type='Password' placeholder="Ingresa tu Contraseña" ></Form.Control>
            </Col>
          </Row>
          <p></p>
          <Stack direction="horizontal" className="col-md-4 mx-auto">
            <Button size='lg' variant="dark">
              Iniciar Sesión
            </Button>
            <div className="p-2 ms-auto" />
            <Link to='/registro'>
              <Button size='lg' variant="dark">
                Registrate
              </Button>
            </Link>
          </Stack>
        </Form>
      </Container>
    );
  }
  
  export default PaginaDeLogin;