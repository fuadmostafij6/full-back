# from django.contrib import admin
from django.urls import path, include
from .views import ProfileView

urlpatterns = [
    path("profile_view/", ProfileView.as_view(), name="profile"),

]