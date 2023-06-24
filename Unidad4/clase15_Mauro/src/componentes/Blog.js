import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import code from '../images/code.jpg';
import ia from "../images/ia.jpg";
import pc from "../images/pc.jpg";
import { Link } from "react-router-dom";

function Blog() {
  const [formulario, setFormulario] = useState({
    titulo: "",
    contenido: "",
    imagen: "",
  });

  //Valores por defecto
  const [informacion, setInformacion] = useState([
    {
      nombre: "Aprende los fundamentos de la programación",
      contenido:
        "La programación es una habilidad cada vez más importante en el mundo actual. En este artículo, te introduciremos a los conceptos básicos que debes conocer para comenzar en el mundo de la programación.",
      imagen: <img src={code} alt="code" style={{ width: '250px', height: 'auto' }}></img>
    },
    {
      nombre: "Explorando la Inteligencia Artificial",
      contenido:
        "La inteligencia artificial (IA) es una de las áreas más emocionantes y prometedoras de la tecnología actual. En este artículo, exploraremos las últimas tendencias en IA y cómo están transformando diversas industrias.",
      imagen: <img src={ia} alt="ia" style={{ width: '250px', height: 'auto' }}></img>,
    },
    {
        nombre: "Consejos para armar tu propia PC",
        contenido: "Aprenderás los pasos básicos para ensamblar una computadora desde cero, desde la selección de los componentes adecuados hasta el proceso de ensamblaje. El contenido incluirá consejos sobre cómo elegir los componentes correctos según tus necesidades y presupuesto, las herramientas necesarias para el ensamblaje, y los pasos clave para un ensamblaje exitoso.",
        imagen: <img src={pc} alt="pc" style={{ width: '250px', height: 'auto' }}></img>,
    }
  ]);

  return (
    <Container>
      <Row>
        <Col>
          <form id="formulario">
            <h3 style={{ fontSize: '30px', fontWeight: 'bold' }}>Blog</h3>
            {informacion.map((elemento) => {
              return (
                <Row>
                  <Col>
                    <h5 style={{ fontSize: '24px'}}>{elemento.nombre}</h5>
                  </Col>
                  <Col>
                    {elemento.contenido}
                  </Col>
                  <Col>
                    {elemento.imagen}
                  </Col>
                </Row>
              );
            })}
          </form>
          <Link to="/inicio">
          <Button>
            Volver a Inicio
          </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Blog;
