from django.db import models

# Create your models here.

class Lugares(models.Model):
    nombre = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    descripcion = models.TextField(max_length=255)