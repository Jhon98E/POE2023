from django.contrib import admin
from biblioteca.models import Biblioteca

# Register your models here.
@admin.register(Biblioteca)
class BibliotecaAdmin(admin.ModelAdmin):
    list_display = ['id', 'titulo']
