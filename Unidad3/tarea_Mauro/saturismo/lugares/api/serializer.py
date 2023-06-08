from rest_framework.serializers import ModelSerializer
from lugares.models import Lugares

class LugaresSerializer(ModelSerializer):
    
    class Meta:
        model = Lugares
        fields = ['id', 'nombre', 'pais', 'descripcion']