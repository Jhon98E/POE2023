from rest_framework.viewsets import ModelViewSet
from biblioteca.api.serializer import BibliotecaSerializer
from biblioteca.models import Biblioteca

class BibliotecaApiSet(ModelViewSet):
    serializer_class = BibliotecaSerializer
    queryset = Biblioteca.objects.all()
