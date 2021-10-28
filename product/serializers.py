from rest_framework import serializers
from .models import Product, Category
# from django.contrib.auth import get_user_model
# from rest_framework.authtoken.models import Token


class CatagorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"
        depth = 1


class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1



