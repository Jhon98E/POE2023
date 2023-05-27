import threading
import time

from Serializador import Serializador

class Comparador(threading.Thread):
    def __init__(self, serializador):
        threading.Thread.__init__(self, name="Comparador", target=self.run)
        self.serializador = serializador
        self.variable_string = " "

    def setVariableString(self, variable_string):
        self.variable_string = variable_string

    def run(self):
        self.revisar_string()

    def revisar_string(self):
        while True:            
            self.serializador.serializar(self.variable_string)
            time.sleep(2)

