from django.db import models

# Create your models here.
class Logindata(models.Model):
    Username=models.CharField(max_length=30)
    Password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class Registerdata(models.Model):
    Name=models.CharField(max_length=30)
    Contact=models.CharField(max_length=30)
    Email=models.CharField(max_length=30)
    Log_id=models.ForeignKey(Logindata,on_delete=models.CASCADE)
    User_status=models.CharField(max_length=30)
    Image=models.ImageField(upload_to='images/',null=True)

class Product(models.Model):
    Country=models.CharField(max_length=30)
    State=models.CharField(max_length=30)
    City=models.CharField(max_length=30)
    Category=models.CharField(max_length=30)
    Location=models.CharField(max_length=30)
    Placename=models.CharField(max_length=30)
    Rating=models.CharField(max_length=30)
    Price=models.CharField(max_length=30)
    Description=models.CharField(max_length=30)
    
class Contactus(models.Model):
     Name=models.CharField(max_length=30)
     Email=models.CharField(max_length=30)
     Contact=models.CharField(max_length=30)
     Status=models.CharField(max_length=30)


