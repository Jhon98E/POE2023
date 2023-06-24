import React, { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function FormularioLogin() {
  const [sesion, setSesion] = useState({
    usuario: "",
  });

  const [formulario, setFormulario] = useState({
    usuario: "",
    password: "",
  });

  const [mensajes, setMensajes] = useState({
    mensaje: "Inicie Seccion",
    error: false,
  });

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!!usuario) {
      setSesion({ usuario: usuario });
      setMensajes({ mensaje: "Bienvenido " + usuario, error: false });
    }
  }, [setSesion, setMensajes]);

  const handleChange = (event) => {
    const temporal = { ...formulario }; //Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const iniciarSeccion = (event) => {
    if (!!formulario.usuario && !!formulario.password) {
      if (formulario.usuario == "mauro" && formulario.password == "hello") {
        localStorage.setItem("usuario", formulario.usuario);
        setSesion({ usuario: formulario.usuario });
        setMensajes({
          mensaje: "Bienvenido " + formulario.usuario,
          error: false,
        });
      } else {
        setMensajes({
          mensaje: "Usuario o contraseña incorrectos",
          error: true,
        });
      }
    } else {
      setMensajes({
        mensaje: "Debe ingresar usuario y contraseña",
        error: true,
      });
    }
  };

  const cerrarSesion = () => {
    const usuario = localStorage.getItem("usuario");
    localStorage.removeItem("usuario");
    setSesion({ usuario: "" });
    setMensajes({ mensaje: "Hasta luego " + usuario, error: false });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label style={{ fontWeight: 'bold' }}>Usuario</Form.Label>
              <Form.Control
                name="usuario"
                onChange={handleChange}
                placeholder="Ingrese el usuario"
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label style={{ fontWeight: 'bold' }}>Contraseña</Form.Label>
              <Form.Control
                name="password"
                type="password"
                onChange={handleChange}
                placeholder="Ingrese la contraseña"
              ></Form.Control>
            </Form.Group>
          </Form>
          <Row>
            <Col>
              <Button onClick={iniciarSeccion}>Iniciar Seccion</Button>
            </Col>
            <Col>
              {sesion.usuario !== "" ? (
                <Link to="/inicio">
                  <Button>Avanzar</Button>
                </Link>
              ) : null}
            </Col>
            <Col>
              {sesion.usuario !== "" ? (
                <Button onClick={cerrarSesion}>Cerrar Seccion</Button>
              ) : null}
            </Col>
          </Row>
        </Col>
        <Col>
          <Alert variant={mensajes.error ? "danger" : "primary"}>
            {mensajes.mensaje}
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default FormularioLogin;
