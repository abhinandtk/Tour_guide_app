# Generated by Django 4.1.1 on 2023-09-01 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tourapp', '0002_alter_registerdata_log_id_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Country', models.CharField(max_length=30)),
                ('State', models.CharField(max_length=30)),
                ('City', models.CharField(max_length=30)),
                ('Category', models.CharField(max_length=30)),
                ('Placename', models.CharField(max_length=30)),
                ('Rating', models.CharField(max_length=30)),
                ('Price', models.CharField(max_length=30)),
                ('Description', models.CharField(max_length=30)),
            ],
        ),
    ]