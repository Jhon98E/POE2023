from rest_framework.serializers import ModelSerializer
from biblioteca.models import Biblioteca

class BibliotecaSerializer(ModelSerializer):

    class Meta:
        model = Biblioteca
        fields = ['id', 'titulo', 'resumen']