from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(Profil)
class AdminProfil(admin.ModelAdmin):
    pass

@admin.register(FoodCategory)
class AdminFoodCategory(admin.ModelAdmin):
    pass

@admin.register(Gout)
class AdminGout(admin.ModelAdmin):
    pass