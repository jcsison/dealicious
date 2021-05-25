from django.db import models


class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    description = models.CharField(max_length=240)
    price = models.FloatField()
    image_url = models.CharField(max_length=240)

    def __str__(self):
        return self.name
