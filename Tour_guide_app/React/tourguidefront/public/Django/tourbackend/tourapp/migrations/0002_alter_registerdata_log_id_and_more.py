# Generated by Django 4.1.1 on 2023-08-27 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tourapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registerdata',
            name='Log_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tourapp.logindata'),
        ),
        migrations.AlterField(
            model_name='registerdata',
            name='User_status',
            field=models.CharField(max_length=30),
        ),
    ]
