from rest_framework.routers import DefaultRouter
from carros.api.views import CarroApiSet

router_carros = DefaultRouter()
router_carros.register(prefix='carros', basename='carros', viewset=CarroApiSet)