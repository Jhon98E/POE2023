from django.db import models

class Usuarios(models.Model):
    nombre = models.CharField(max_length=255)
    apellido = models.CharField(max_length=255)
    usuario = models.CharField(max_length=255)
    contrasenia = models.CharField(max_length=255)
