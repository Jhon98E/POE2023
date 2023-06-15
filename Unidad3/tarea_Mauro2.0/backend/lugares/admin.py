from django.contrib import admin
from lugares.models import Lugares

# Register your models here.
@admin.register(Lugares)
class LugaresAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'pais']
    