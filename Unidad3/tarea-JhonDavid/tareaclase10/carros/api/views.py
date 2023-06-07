from rest_framework.viewsets import ModelViewSet
from carros.api.serializer import CarroSerializer
from carros.models import Carro

class CarroApiSet(ModelViewSet):
    serializer_class = CarroSerializer
    queryset = Carro.objects.all()