# from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import views
from rest_framework import mixins
from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerialisers
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth.models import User
# Create your views here.


# class ProfileView(views.APIView):
#     authentication_classes = [TokenAuthentication, ]
#     permission_classes = [IsAuthenticated, ]
#
#     def GET(self, request):
#         try:
#             query = Profile.objects.get(prouser=request.user)
#             serializer = ProfileSerialisers(query)
#             response_message = {"error":False,"data":serializer.data}
#
#         except:
#
#             response_message = {"error": True, "message": "Somthing is Wrong"}
#         return Response(response_message)

class ProfileView(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Profile.objects.all()
    serializer_class = ProfileSerialisers

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)