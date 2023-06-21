from rest_framework.viewsets import ModelViewSet
from carros.api.serializer import CarroSerializer
from carros.models import Carro

class CarroApiSet(ModelViewSet):
    serializer_class = CarroSerializer
    def get_queryset(self):
        queryset = Carro.objects.all()

        marca = self.request.query_params.get('marca')
        modelo = self.request.query_params.get('modelo')

        if marca is not None:
            queryset = queryset.filter(marca=marca)
            
        if modelo is not None:
            queryset = queryset.filter(modelo=modelo)
        return queryset