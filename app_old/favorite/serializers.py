from rest_framework import serializers

from .models import Favorite


class FavoriteSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Favorite
        fields = ("product", "user")
