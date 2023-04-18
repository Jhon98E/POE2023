import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'


function Suma(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultado = numero1 + numero2;
  document.getElementById("resultadoSuma").value = resultado
}

function Resta(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultado = numero1 - numero2;
  document.getElementById("resultadoResta").value = resultado
}

function Multiplicacion(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultado = numero1 * numero2;
  document.getElementById("resultadoMultiplicacion").value = resultado
}

function Division(){
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let resultado = numero1 / numero2;
  document.getElementById("resultadoDivision").value = resultado
}

function realizarOperaciones(){
  Suma();
  Resta();
  Multiplicacion();
  Division();
}

function Limpiar(){
  document.getElementById("formulario").reset()
}

function App() {

  return (
    <div className="App">
      <div class="container">
        <form id="formulario">
        <h3>Calculadora</h3>
          <div class="row">

            <div class="col">

              <Form.Group className="mb-3">
                <Form.Text className="text-muted"># Ingrese dos numeros</Form.Text>
                <br></br>
                <Form.Label>Numero 1</Form.Label>
                <Form.Control id="numero1" placeholder="Ingrese el numero 1"></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Numero 2</Form.Label>
                <Form.Control id="numero2" placeholder="Ingrese el numero 2"></Form.Control>
              </Form.Group>

              <Button className='mb-3' onClick={realizarOperaciones}>Realizar Operaciones</Button>
              <br></br>
              <Button className='mb-3'onClick={Limpiar}>Limpiar </Button>

            </div>

            <div class="col">
              <Form.Group className="mb-3" >
                <Form.Label>Suma</Form.Label>
                <Form.Control id="resultadoSuma" placeholder="Resultado Suma" readOnly></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Resta</Form.Label>
                <Form.Control id="resultadoResta" placeholder="Resultado Resta" readOnly></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Multiplicacion</Form.Label>
                <Form.Control id="resultadoMultiplicacion" placeholder="Resultado Multiplicacion" readOnly></Form.Control>
              </Form.Group>

              <Form.Group className="mb-3" >
                <Form.Label>Division</Form.Label>
                <Form.Control id="resultadoDivision" placeholder="Resultado Division" readOnly></Form.Control>
              </Form.Group>

            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
