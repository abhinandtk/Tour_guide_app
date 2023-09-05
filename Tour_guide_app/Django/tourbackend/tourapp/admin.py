from django.contrib import admin
from .models import Logindata,Registerdata,Product

# Register your models here.
admin.site.register(Logindata)
admin.site.register(Registerdata)
admin.site.register(Product)
