# Generated by Django 4.2.1 on 2023-05-28 02:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('biblioteca', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='biblioteca',
            old_name='resume',
            new_name='resumen',
        ),
    ]
