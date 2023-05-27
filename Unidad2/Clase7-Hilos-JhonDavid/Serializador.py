import logging
import time

class Serializador:
    def __init__(self, archivo):
        self.archivo = archivo
        self.valor_anterior = ""

    def serializar(self, variable_string):
        if variable_string != self.valor_anterior:
            with open(self.archivo, "w") as file:
                file.write(variable_string + "\n")
            logging.debug(f"String {variable_string} serializada en {self.archivo}")
            self.valor_anterior = variable_string
