from django.urls import include, path
from django.views.decorators.csrf import csrf_exempt
from graphene_django.views import GraphQLView
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("favorite", views.FavoriteViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api", include("rest_framework.urls", namespace="rest_framework")),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
