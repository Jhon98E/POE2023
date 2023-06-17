from rest_framework.viewsets import ModelViewSet
from lugares.api.serializer import LugaresSerializer
from lugares.models import Lugares

class LugaresViewSet(ModelViewSet):
    serializer_class = LugaresSerializer
    def get_queryset(self):
        queryset = Lugares.objects.all()
        nombre = self.request.query_params.get('nombre')
        pais = self.request.query_params.get('pais')
        if nombre is not None:
            queryset = queryset.filter(nombre = nombre)
        if pais is not None:
            queryset = queryset.filter(pais = pais)
        return queryset
