from django.db import models

# Create your models here.
class Model(models.Model):
    bir=models.IntegerField(null=True,blank=True)
    iki=models.IntegerField(null=True,blank=True)
    uc=models.IntegerField(null=True,blank=True)