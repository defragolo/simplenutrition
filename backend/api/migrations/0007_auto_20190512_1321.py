# Generated by Django 2.2.1 on 2019-05-12 11:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0006_auto_20190512_0036'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profil',
            name='id',
        ),
        migrations.RemoveField(
            model_name='profil',
            name='user',
        ),
        migrations.AddField(
            model_name='profil',
            name='user_id',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
