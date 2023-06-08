from rest_framework.viewsets import ModelViewSet
from lugares.api.serializer import LugaresSerializer
from lugares.models import Lugares

class LugaresViewSet(ModelViewSet):
    serializer_class = LugaresSerializer
    queryset = Lugares.objects.all()
    