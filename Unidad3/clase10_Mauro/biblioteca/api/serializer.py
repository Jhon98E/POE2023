from rest_framework.serializers import ModelSerializer
from biblioteca.models import Biblioteca

class BibliotecaSerializer(ModelSerializer):

    class meta:
        model = Biblioteca
        fields = ['id', 'titulo', 'resumen']
