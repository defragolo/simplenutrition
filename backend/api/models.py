from django.db import models
from django.contrib.auth.models import User


class Profil(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, primary_key=True)
    taille = models.IntegerField(default=0)
    poids = models.FloatField(default=0)
    age = models.IntegerField(default=0)

    date_created = models.DateField(auto_now=False, auto_now_add=True, null = True)
    last_update = models.DateField(auto_now=True, auto_now_add=False,null = True)


class FoodCategory(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Gout(models.Model):
    GOUTS_CHOICES = [(i, i) for i in range(-100, 100)]
    user = models.ForeignKey(
        User, on_delete=models.CASCADE)
    gout = models.ForeignKey(
     FoodCategory, on_delete=models.CASCADE
    )
    intensity = models.IntegerField(default=0, choices=GOUTS_CHOICES)

    date_created = models.DateField(auto_now=False, auto_now_add=True, null = True)
    last_update = models.DateField(auto_now=True, auto_now_add=False, null = True)
