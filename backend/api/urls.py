from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from .views import *

from rest_framework.authtoken.views import obtain_auth_token

# The API URLs are now determined automatically by the router.
urlpatterns = [

    path('profil', ProfilList.as_view(), name="profil_list"),
    path('profil/<int:user_id>', ProfilDetails.as_view(), name="profil_detail"),

    path('foodcategory', FoodCategoryList.as_view(),
         name="category_aliment_list"),
    path('foodcategory/<int:pk>', FoodCategoryDetails.as_view(),
         name="category_aliment_details"),

    path('gout', GoutList.as_view(), name="gout_list"),
    path('gout/<int:pk>', GoutDetails.as_view(), name="gout_details"),

    url(r'^user/$', UserViewSet.as_view(), name='user_list'),
    url(r'^user/add/$', CreateUserViewSet.as_view(), name='add_user'),
    url(r'^obtain-auth-token/$', obtain_auth_token, name='obtain_auth_token'),

]
