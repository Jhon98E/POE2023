from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

def index(request):
    texto = '{"name":""Hello, world. You are at the polls index.""}'
    return HttpResponse(texto)

@csrf_exempt
def test_post(request):
    texto = 'Hello, "%s"' % str(request.body)
    return HttpResponse(texto)