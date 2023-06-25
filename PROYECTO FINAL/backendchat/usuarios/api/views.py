from rest_framework.viewsets import ModelViewSet
from usuarios.api.serializer import UsuarioSerializer
from usuarios.models import Usuarios

class UsuarioApiSet(ModelViewSet):
    serializer_class = UsuarioSerializer
    def get_queryset(self):
        queryset = Usuarios.objects.all()

        nombre = self.request.query_params.get('nombre')
        apellido = self.request.query_params.get('apellido')
        usuario = self.request.query_params.get('usuario')
        contrasenia = self.request.query_params.get('contrasenia')

        if nombre is not None:
            queryset = queryset.filter(nombre=nombre)
            
        if apellido is not None:
            queryset = queryset.filter(apellido=apellido)

        if usuario is not None:
            queryset = queryset.filter(usuario=usuario)

        if contrasenia is not None:
            queryset = queryset.filter(contrasenia=contrasenia)
        return queryset