from django.contrib import admin
from carros.models import Carro

# Register your models here.
@admin.register(Carro)
class CarroAdmin(admin.ModelAdmin):
    list_display = ['id']