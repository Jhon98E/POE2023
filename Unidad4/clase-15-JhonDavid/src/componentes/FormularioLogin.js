import React, {useState, useEffect} from 'react';
import { Alert, Container, Row, Col, Form, FormGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function FormularioLogin() {
  
  const [sesion, setSesion] = useState({
    usuario: '',
  })
  
  const [formulario, setFormulario] = useState({
    usuario: '',
    contrasenia: '',
  })

  const [mensajes, setMensajes] = useState ({
    mensaje: 'Ingrese Usuario y Contraseña para Iniciar Sesión',
    error: false
  })

  useEffect(() => {
    const usuario = localStorage.getItem('usuario')
    if (!!usuario) {
      setSesion({usuario: usuario})
      setMensajes({mensaje: 'Bienvenido ' + usuario, error: false})
    }
  }, [setMensajes, setSesion])

  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  const iniciarSesion = () => {
    if (!!formulario.usuario && !!formulario.contrasenia) {
      if (formulario.usuario === 'jhonenriquez' && formulario.contrasenia === 'jhon123') {
        localStorage.setItem('usuario', formulario.usuario)
        setSesion({usuario: formulario.usuario})
        setMensajes({mensaje: 'Bienvenido ' + formulario.usuario, error: false})
      } else {
        setMensajes({mensaje: 'Usuario o Contraseña Incorrectos', error: true})
      }
    } else {
      setMensajes({mensaje: 'Debe Ingresar Usuario y Contraseña', error: true})
    }
  }

  const cerrarSesion = () => {
    const usuario = localStorage.getItem('usuario')
    localStorage.removeItem('usuario')
    setSesion({usuario: ''})
    setMensajes({mensaje: 'Hasta luego ' + usuario, error: false})
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Form.Label>Usuario</Form.Label>
              <Form.Control name="usuario" onChange={handleChange} placeholder="Ingrese el Usuario" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="contrasenia" type="password" onChange={handleChange} placeholder="Ingrese la Contraseña" />
            </FormGroup>
          </Form>
          <Row>
            <Col>
              <Button onClick={iniciarSesion} >
                Iniciar Sesion
              </Button>
            </Col>
            <Col>
              {
                sesion.usuario !== ''?
                <Link to='/inicio'>
                  <Button>
                    Avanzar
                  </Button>
                </Link>
                :null
              }
            </Col>
            <Col>
              {
                sesion.usuario !== ''?
                <Button onClick={cerrarSesion} >
                  Cerrar Sesion
                </Button>
                :null
              }
            </Col>
          </Row>
        </Col>
        <Col>
          <Alert variant={mensajes.error ? 'danger' : 'primary'}>
            {mensajes.mensaje}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioLogin;
