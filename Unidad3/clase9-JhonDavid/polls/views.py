from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

def index(request):
    texto = '{"name": "Hello, World. you are the polls index."}'
    return HttpResponse(texto)

@csrf_exempt
def test_post(request):
    texto = 'Hola, "%s", %s' % (request.body, " como estas? ")
    return HttpResponse(texto)
