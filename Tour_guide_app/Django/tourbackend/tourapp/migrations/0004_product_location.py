# Generated by Django 4.1.1 on 2023-09-04 14:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourapp', '0003_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='Location',
            field=models.CharField(default='Unknown', max_length=30),
        ),
    ]