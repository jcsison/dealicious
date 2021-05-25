from django.db import models

# Create your models here.


class User(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    email = models.CharField(max_length=40)
    date_of_birth = models.DateField()
