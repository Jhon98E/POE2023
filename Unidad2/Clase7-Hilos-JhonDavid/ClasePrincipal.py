import logging
from Comparador import Comparador
from Serializador import Serializador

logging.basicConfig(level=logging.DEBUG)

serializador = Serializador("serial.txt")
comparador = Comparador(serializador)
comparador.start()

while True:
    variable_string = input("Ingrese una cadena de texto: ")
    comparador.setVariableString(variable_string)
