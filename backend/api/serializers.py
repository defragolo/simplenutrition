from rest_framework import serializers
from .models import *

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator

class ProfilSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profil
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class CreateUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True,
                                   validators=[UniqueValidator(queryset=User.objects.all())])
    username = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(min_length=8)

    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email']

    def validate_password(self, value):
        return make_password(value)

class FoodCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodCategory
        fields = '__all__'

class GoutSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gout
        fields = '__all__'


