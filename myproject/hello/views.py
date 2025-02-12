from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class HelloView(APIView):
    def get(self, request):
        return Response({"message": "Hello from Django!"}, status=status.HTTP_200_OK)

# Create your views here.
def hello(request):
    return HttpResponse("hello, Django!")