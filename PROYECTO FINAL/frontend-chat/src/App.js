import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button} from 'react-bootstrap'

function App() {
  return (
    <Container>      
      <Form>

        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control placeholder="Registre sus Nombres"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Apellido</Form.Label>
          <Form.Control placeholder="Registre Sus Apellidos"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Usuario</Form.Label>
          <Form.Control placeholder="Registre Su Usuario"></Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control placeholder="Registre su contraseña"></Form.Control>
        </Form.Group>

        <Button>
          Registrarse
        </Button>
        
      </Form>
    </Container>
  );
}

export default App;
