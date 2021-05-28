"""dealicious URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from graphene_django.views import GraphQLView
from rest_framework import routers

from favorite.views import FavoriteViewSet
from product.views import ProductViewSet
from user.views import UserViewSet

router = routers.DefaultRouter()
router.register("favorite", FavoriteViewSet)
router.register("api/product", ProductViewSet)
router.register("api/user/login", UserViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include(router.urls)),
    path("graphql", GraphQLView.as_view(graphiql=True)),
    path("api", include("rest_framework.urls", namespace="rest_framework")),
]
