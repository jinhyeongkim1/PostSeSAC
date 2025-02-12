from django.urls import path
from . import views
from .views import HelloView

urlpatterns = [
    path('',views.hello, name='hello'),
    path('hello/', HelloView.as_view(), name='hello'),
]
