from rest_framework.routers import DefaultRouter
from biblioteca.api.views import BibliotecaApiSet

router_biblioteca = DefaultRouter()
router_biblioteca.register(prefix='biblioteca', basename='biblioteca', viewset=BibliotecaApiSet)