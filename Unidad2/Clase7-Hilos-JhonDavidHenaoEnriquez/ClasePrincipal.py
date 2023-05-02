import logging
from Comparador import Comparador
from Serializador import Serializador

logging.basicConfig(level=logging.DEBUG)

serializador = Serializador("serial.txt")
watcher = Comparador(serializador)
watcher.start()
