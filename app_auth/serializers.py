from rest_framework import serializers
from .models import Profile


class ProfileSerialisers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        depth = 1
