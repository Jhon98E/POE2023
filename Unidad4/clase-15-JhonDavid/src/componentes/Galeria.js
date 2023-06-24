import React, {useState, useEffect} from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import dibujo1 from '../dibujos/dibujo1.png';
import dibujo2 from '../dibujos/dibujo2.png';

function Galeria() {
    
	const [sesion, setSesion] = useState({
    usuario: '',
  })

  const [mensajes, setMensajes] = useState ({
    mensaje: 'No se ha iniciado sesión',
    error: false
  })

  useEffect(() => {
    const usuario = localStorage.getItem('usuario')
    if (!!usuario) {
      setSesion({usuario: usuario})
      setMensajes({mensaje: 'Bienvenido a la pagina de Galeria ' + usuario, error: false})
    } else {
      setSesion({usuario: ''})
      setMensajes({mensaje: 'No ha Iniciado Sesión ' + usuario, error: true})
    }
  }, [setMensajes, setSesion])

  const [informacion] = useState([
    {
      imagen1: <img src={dibujo1} class="img-thumbnail" alt="code" style={{ width: '250px', height: 'auto' }}></img>
    },
    {
      imagen2: <img src={dibujo2} class="img-thumbnail" alt="ia" style={{ width: '250px', height: 'auto' }}></img>,
    },
  ]);

    return (

			<Container>
        {informacion.map((elemento) => {
          return (
              <Row>
                <Col>
                  {elemento.imagen1}
                  {elemento.imagen2}
                </Col>                
              </Row>
            )
          }
        )}
				<Row>
          <Col>
            {
              sesion.usuario !== ''?
              <Link to='/inicio'>
                <Button>
                  Volver al Inicio
                </Button>
              </Link>
              :null
            }
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
  
  export default Galeria;