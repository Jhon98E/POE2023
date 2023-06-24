import React, { useState, useEffect } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Inicio() {
  const [sesion, setSesion] = useState({
    usuario: "",
  });

  const [mensajes, setMensajes] = useState({
    mensaje: "No se ha iniciado seccion!",
    error: false,
  });

  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!!usuario) {
      setSesion({ usuario: usuario });
      setMensajes({
        mensaje: "Bienvenido a la pagina Inicio " + usuario,
        error: false,
      });
    } else {
      setSesion({ usuario: "" });
      setMensajes({ mensaje: "No se ha iniciado seccion", error: true });
    }
  }, [setSesion, setMensajes]);

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
          <Row>
            <Col>
              {sesion.usuario !== "" ? (
                <Link to="/">
                  <Button onClick={cerrarSesion}>Cerrar Seccion</Button>
                </Link>
              ) : null}
            </Col>
            <Col>
              {sesion.usuario !== "" ? (
                <Link to="/blog">
                  <Button>Ir al Blog</Button>
                </Link>
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

export default Inicio;
