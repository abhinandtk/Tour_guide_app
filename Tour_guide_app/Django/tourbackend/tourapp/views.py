# from django.shortcuts import render
# from django.shortcuts import render,redirect
from .serializers import LoginUserSerializer,UserRegisterSerializer,ProductSerializer,ContactSerializer
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .models import Logindata,Registerdata,Product

# Create your views here.
class UserRegister(GenericAPIView):
    serializer_class=UserRegisterSerializer
    serializer_class_login=LoginUserSerializer
    def post(self,request):
        log_id=''
        name=request.data.get('Name')
        contact=request.data.get('Contact')
        email=request.data.get('Email')
        username=request.data.get('Username')
        password=request.data.get('Password')
        role='User'
        user_status='0'
        if(Logindata.objects.filter(Username=username)):
            return Response({'message':'duplicate username found!'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'Username':username,'Password':password,'role':role})
            print(serializer_login)
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
            print(log_id)
        serializer=self.serializer_class(data={'Name':name,'Contact':contact,'Email':email,'User_status':user_status,'Log_id':log_id})
        print(serializer)
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':'User Registered Successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
class UserLogin(GenericAPIView):
    serializer_class=LoginUserSerializer
    def post(self,request):
        username=request.data.get('Username')
        password=request.data.get('Password')
        role=''
        logreg=Logindata.objects.filter(Username=username,Password=password)
        if(logreg.count()>0):
            read_serializer=LoginUserSerializer(logreg,many=True)
            for i in read_serializer.data:
                id=i['id']
                print(id)
                role=i['role']
            regdata=Registerdata.objects.all().filter(Log_id=id).values()
            print(regdata)
            for i in regdata:
                user_id=i['id']
                user_status=i['User_status']
                name=i['Name']
                contact=i['Contact']
                email=i['Email']
            return Response({'data':{'log_id':id,'role':role,'user_id':user_id,'user_status':user_status,'name':name,'contact':contact,'email':email}})
        else:
            return Response({'data':'no data available','success':False},status=status.HTTP_400_BAD_REQUEST)
class Getalldata(GenericAPIView):
    serializer_class=UserRegisterSerializer
    def get(self,request):
        queryset=Registerdata.objects.all()
        if(queryset.count()>0):
            serializer=UserRegisterSerializer(queryset,many=True)
            return Response({'data':serializer.data,'message':'all package hotel set','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':'no data available','success':False},status=status.HTTP_201_CREATED)
class AdminRegister(GenericAPIView):
    serializer_class=UserRegisterSerializer
    serializer_class_login=LoginUserSerializer
    def post(self,request):
        log_id=''
        name=request.data.get('Name')
        contact=request.data.get('Contact')
        email=request.data.get('Email')
        username=request.data.get('Username')
        password=request.data.get('Password')
        role='Admin'
        user_status='0'
        if(Logindata.objects.filter(Username=username)):
            return Response({'message':'duplicate username found!'},status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data={'Username':username,'Password':password,'role':role})
            print(serializer_login)
        if serializer_login.is_valid():
            log=serializer_login.save()
            log_id=log.id
            print(log_id)
        serializer=self.serializer_class(data={'Name':name,'Contact':contact,'Email':email,'User_status':user_status,'Log_id':log_id})
        print(serializer)
        if serializer.is_valid():
            print('hi')
            serializer.save()
            return Response({'data':serializer.data,'message':'Admin Registered Successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
class ProductAdd(GenericAPIView):
    serializer_class=ProductSerializer
    def post(self,request):
        Country=request.data.get('Country')
        State=request.data.get('State')
        City=request.data.get('City')
        Category=request.data.get('Category')
        Placename=request.data.get('Placename')
        Location=request.data.get('Location')
        Rating=request.data.get('Rating')
        Price=request.data.get('Price')
        Description=request.data.get('Description')
        serializer=self.serializer_class(data={'Country':Country,'State':State,'City':City,'Category':Category,'Placename':Placename,'Location':Location,'Rating':Rating,'Price':Price,'Description':Description})
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Product Registered Successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
class GetProductdata(GenericAPIView):
    serializer_class=ProductSerializer
    def get(self,request):
        datas=Product.objects.all()
        if(datas.count()>0):
            serializer=ProductSerializer(datas,many=True)
            return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':[],'message':'no product available','success':False},status=status.HTTP_201_CREATED)
class Deleteproduct(GenericAPIView):
    def delete(self,request,id):
        data=Product.objects.get(pk=id)
        data.delete()
        return Response({'message':'Deleted successfully','success':True},status=status.HTTP_200_OK)
class Update_product(GenericAPIView):
    def put(self,request,id):
        products=Product.objects.get(pk=id)
        serializer=ProductSerializer(instance=products,data=request.data,partial=True)
        if serializer.is_valid():
          serializer.save()
          return Response({'data':serializer.data,'message':'product updated successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':serializer.error,'message':'Update Failed','success':False},status=status.HTTP_400_BAD_REQUEST)
class Getsingleproduct(GenericAPIView):
    def get(self,request,id):
        products=Product.objects.filter(pk=id).values()
        return Response({'data':products,'message':'single product data','success':True},status=status.HTTP_200_OK)
# class Contact(GenericAPIView):
#     serializer_class=ContactSerializer
#     def post(self,request):
#         Name=request.data.get('Name')
#         Email=request.data.get('Email')
#         Contact=request.data.get('Contact')
#         serializer=self.serializer_class(data:{})

class UpdateRegister(GenericAPIView):
    def put(self,request,id):
        Register=Registerdata.objects.get(pk=id)
        serializer=UserRegisterSerializer(instance=Register,data=request.data,partial=True)
        if serializer.is_valid():
          serializer.save()
          return Response({'data':serializer.data,'message':'product updated successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':serializer.error,'message':'Update Failed','success':False},status=status.HTTP_400_BAD_REQUEST)






    






    
    
        
    
    
