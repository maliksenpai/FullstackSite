from django.shortcuts import render
from django.http import HttpResponse
from .models import Model
from .forms import Form
from .serialzers import Serializer
from rest_framework.generics import ListAPIView,CreateAPIView,ListCreateAPIView

# Create your views here.

class Form(ListCreateAPIView):
    queryset = Model.objects.all()
    serializer_class=Serializer