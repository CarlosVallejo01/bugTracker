# Generated by Django 4.0.4 on 2022-05-05 01:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dbhandler', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
