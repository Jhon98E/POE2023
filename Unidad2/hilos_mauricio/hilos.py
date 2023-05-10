"""Crear una clase que revise si una variable de tipo string cambio cada 2 segundos,
si es asi serialice la variable y la guarde en un archivo de forma asincrona utilizando hilos
Se debe ingresar por parametro el string
Se debe imprimir en el log cuando se serialice"""

import threading
import time
import logging

logging.basicConfig(level=logging.DEBUG)

class Monitoreo_variable(threading.Thread):
    def __init__(self, serializar):
        threading.Thread.__init__(self, target=self.run)
        self.serializar = serializar
        self.variableAComparar = ""
    
    def setVariable(self, variableAComparar):
        self.variableAComparar = variableAComparar
    
    def run(self):
        self.comprobarString()
    
    def comprobarString(self):
        while True:
            self.serializar.Serializar(self.variableAComparar)
            time.sleep(2)

class Serializar:
    def __init__(self, archivo):
        self.archivo = archivo
        self.variablePrevia = ""
    
    def serializar(self, variableAComparar):
        if variableAComparar== self.variablePrevia:
            logging.debug(f"-Los Strings son iguales-")
        elif variableAComparar != self.variablePrevia:
            with open (self.archivo, "w") as file:
                file.write(variableAComparar + "\n")
            logging.debug(f"Variable String{variableAComparar} serializada en {self.archivo}")
            self.variablePrevia = variableAComparar
        elif variableAComparar == "bye" or "close":
            threading.Thread = False

serializar = Serializar("archivo.txt")
monitoreoVar = Monitoreo_variable(serializar)
monitoreoVar.start()

while True:
    variableAComparar = input("Ingrese un String: ")
    monitoreoVar.setVariable(variableAComparar)