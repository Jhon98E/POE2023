import threading
import time
from Serializador import Serializador

class Comparador(threading.Thread):
    def __init__(self, serializador):
        threading.Thread.__init__(self, name="Comparador", target=self.run)
        self.serializador = serializador

    def run(self):
        self.revisar_string()

    def revisar_string(self):
        variable_string = ""
        while True:
            time.sleep(2)
            variable_string = input("Ingrese una cadena de texto: ")
            self.serializador.serializar(variable_string)
