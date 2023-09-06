from .import views
from django.urls import path 

urlpatterns = [
    path("UserRegister",views.UserRegister.as_view(),name='UserRegister'),
    path("UserLogin",views.UserLogin.as_view(),name='UserLogin'),
    path("Getalldata",views.Getalldata.as_view(),name='Getalldata'),
    path("AdminRegister",views.AdminRegister.as_view(),name='AdminRegister'),
    path("ProductAdd",views.ProductAdd.as_view(),name='ProductAdd'),
    path("GetProductdata",views.GetProductdata.as_view(),name='GetProductdata'),
    path("Deleteproduct/<int:id>",views.Deleteproduct.as_view(),name='Deleteproduct'),
    path("Update_product/<int:id>",views.Update_product.as_view(),name='Update_product'),
    path("Getsingleproduct/<int:id>",views.Getsingleproduct.as_view(),name='Getsingleproduct'),
    path("UpdateRegister/<int:id>",views.UpdateRegister.as_view(),name='UpdateRegister'),
]
