import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';


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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onchange={handleChange} name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onchange={handleChange} name="password" type="password" placeholder="Password" />
          </Form.Group>
          {formulario.email}
          {formulario.password}
          <Button>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
