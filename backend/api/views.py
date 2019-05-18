from django.shortcuts import render

# Create your views here.

from .models import *
from rest_framework import response, generics, viewsets, permissions
from .serializers import *


####################################
# User
###################################
class UserViewSet(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def retrieve(self, request, *args, **kwargs):
        return response.Response(UserSerializer(request.user, context={'request': request}).data)


class CreateUserViewSet(generics.CreateAPIView):
    serializer_class = CreateUserSerializer


####################################
# Profil
###################################
class ProfilList(generics.ListCreateAPIView):
    serializer_class = ProfilSerializers
    queryset = Profil.objects.all()

    def get_queryset(self):
        queryset = self.queryset.all()
        if 'user' in self.request.query_params:
            user = self.request.query_params.get('user')
            queryset = self.queryset.filter(user=user)
        return queryset

    def perform_create(self, serializer):
        serializer.save()


class ProfilDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfilSerializers
    queryset = Profil.objects.all()


###################################
# Gout
###################################
class GoutList(generics.ListCreateAPIView):
    serializer_class = GoutSerializer
    queryset = Gout.objects.all()

    def get_queryset(self):
        print(self.request.query_params)
        queryset = self.queryset.all()
        if 'user' in self.request.query_params:
            user = self.request.query_params.get('user')
            queryset = self.queryset.filter(user=user)
        return queryset

class GoutDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GoutSerializer
    queryset = Gout.objects.all()

###################################
# Food Category
###################################
class FoodCategoryList(generics.ListCreateAPIView):
    serializer_class = FoodCategorySerializer
    queryset = FoodCategory.objects.all()



class FoodCategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FoodCategorySerializer
    queryset = FoodCategory.objects.all()
