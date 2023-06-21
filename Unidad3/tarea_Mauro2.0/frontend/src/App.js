import './App.scss';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {guardarLugar, traerTodosLosLugares, traerPorNombre, traerPorNombreYPais} from './servicios/clienteAxios';

function App() {

  const [formulario, setformulario] = useState({
    nombre: '',
    pais: '',
    descripcion: ''
  });

  const [nombre, setNombre] = useState({
    nombre: '',
  });

  const [pais, setPais] = useState({
    pais: '',
  });

  //Valores de lugares por defecto
  const [informacion, setInformacion] = useState([
    {
      "nombre": "Caicedonia",
      "pais": "Colombia",
      "descripcion": "Hello",
    },
    {
      "nombre": "Sevilla",
      "pais": "Colombia",
      "descripcion": "Hiiiii",
    },
    {
      "nombre": "Guatape",
      "pais": "Colombia",
      "descripcion":"World",
    }
  ])


  const handleChange = (event) => {
    const temporal = {...formulario} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setformulario(temporal)
  }

  const handleChangeBuscarNombre = (event) => {
    const temporal = {...nombre} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setNombre(temporal)
  }

  const handleChangeBuscarNombreYPais = (event) => {
    const temporal = {...pais} //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setPais(temporal)
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

  const traerNombre = async() => {
    const temporal = await traerPorNombre(nombre.nombre)
    setInformacion(temporal)
    document.getElementById("nombre").reset()
  }

  const traerNombreYPais = async() => {
    const temporal = await traerPorNombreYPais(nombre.nombre, pais.pais)
    setInformacion(temporal)
    document.getElementById("nombre").reset()
    document.getElementById("nombreYPais").reset()
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
                <Form.Control onChange={handleChange} as="textarea" rows={3} name="descripcion" placeholder="Ingrese una descripcion"></Form.Control>
              </Form.Group>
              <Button onClick={guardar}>
                Guardar Lugar
              </Button>

            </Col>
          </Row>
        </form>
        <Form.Text>Lugares</Form.Text>
        {
          informacion.map((elemento) => {
            return <Row>
              <Col>
                {elemento.nombre}
              </Col>
              <Col>
                {elemento.pais}
              </Col>
              <Col>
                {elemento.descripcion}
              </Col>
            </Row>
          })
        }
        <Button onClick={traerTodos}>
          Traer Libros
        </Button>
        <Form id='nombre'>
        <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleChangeBuscarNombre} name="nombre" placeholder="Ingrese el nombre"></Form.Control>
              </Form.Group>
        </Form>
        <Button onClick={traerNombre}>
          Buscar por nombre
        </Button>
        <Form id='nombreYPais'>
        <Form.Group className="mb-3" >
                <Form.Label>Pais</Form.Label>
                <Form.Control onChange={handleChangeBuscarNombreYPais} name="pais" placeholder="Ingrese el pais"></Form.Control>
              </Form.Group>
        </Form>
        <Button onClick={traerNombreYPais}>
          Buscar por nombre y pais
        </Button>
      </Container>
    </div>
  );
}

export default App;
