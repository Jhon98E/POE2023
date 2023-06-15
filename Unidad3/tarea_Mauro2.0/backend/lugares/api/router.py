from rest_framework.routers import DefaultRouter
from lugares.api.views import LugaresViewSet

router_lugares = DefaultRouter()
router_lugares.register(prefix='lugares',  basename='lugares', viewset=LugaresViewSet)
