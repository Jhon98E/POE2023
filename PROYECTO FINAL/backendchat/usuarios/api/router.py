from rest_framework.routers import DefaultRouter
from usuarios.api.views import UsuarioApiSet

router_usuarios = DefaultRouter()
router_usuarios.register(prefix='usuarios', basename='usuarios', viewset=UsuarioApiSet)