from rest_framework import serializers
from .models import Logindata,Registerdata,Product

class LoginUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Logindata
        fields='__all__'
class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=Registerdata
        fields='__all__'
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'