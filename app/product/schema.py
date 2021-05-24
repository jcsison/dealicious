import graphene
from graphene_django import DjangoObjectType

from .models import Product


class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = ("id", "name", "description", "price")


class Query(graphene.ObjectType):
    product_by_name = graphene.Field(ProductType, name=graphene.String(required=True))

    def resolve_product_by_name(root, *_info, name):
        try:
            return Product.objects.get(name=name)
        except Product.DoesNotExist:
            return None


schema = graphene.Schema(query=Query)
