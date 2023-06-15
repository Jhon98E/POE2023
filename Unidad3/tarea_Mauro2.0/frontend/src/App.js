import './App.scss';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {guardarLugar, traerTodosLosLugares} from './servicios/clienteAxios';

function App() {

  const [formulario, setformulario] = useState({
    nombre: '',
    pais: '',
    descripcion: ''
  });

  const [informacion, setInformacion] = useState([
    {
      "nombre": "Caicedonia",
    },
    {
      "nombre": "Sevilla",
    },
    {
      "nombre": "Guatape",
    }
  ])


  const handleChange = (event) => {
    const temporal = {...formulario} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setformulario(temporal)
  }

  const guardar = async() => {
    await guardarLugar (formulario)
    setformulario({
      nombre: '',
      pais: '',
      descripcion: ''
    })
    document.getElementById("formulario").reset()
    alert('¡El lugar se ha guardado correctamente!');
    traerTodos()
  }

  const traerTodos = async() => {
    const temporal = await traerTodosLosLugares()
    setInformacion(temporal)
  }

  return (
    <div className="App">
      <Container>
        <form id="formulario">
        <h3>DiscoverPlaces</h3>
          <Row>

            <Col>

              <Form.Group className="mb-3">
                <Form.Text className="text-muted"># Ingrese los datos para el registro del lugar turistico</Form.Text>
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
              <Button onClick={guardar}>
                Guardar Lugar
              </Button>

            </Col>
          </Row>
        </form>
        <text>Lugares</text>
        {
          informacion.map((elemento) => {
            return <Row>
              <Col>
                Nombre
              </Col>
              <Col>
                {elemento.nombre}
              </Col>
            </Row>
          })
        }
        <Button onClick={traerTodos}>
          Traer Libros
        </Button>
      </Container>
    </div>
  );
}

export default App;
