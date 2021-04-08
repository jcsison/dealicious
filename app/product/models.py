from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=240)
    price = models.FloatField()

    def __str__(self):
        return self.name
