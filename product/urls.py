from django.urls import path, include
from rest_framework import routers

from .views import ProductView, CategoryView

from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('product_api/', ProductView.as_view()),
    path('category_api/', CategoryView.as_view()),

]
