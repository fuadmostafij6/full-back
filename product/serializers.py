from rest_framework import serializers
from .models import Product, Category, ProductReview
# from django.contrib.auth.models import User
# from app_auth.models import Profile
# from app_auth.serializers import ProfileSerialisers
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


class ProductReviewSerializer(serializers.ModelSerializer):


    class Meta:
        model = ProductReview
        fields = "__all__"
        depth = 1
