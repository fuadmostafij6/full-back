# Generated by Django 3.2.8 on 2021-11-04 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0007_alter_productreview_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slug',
            field=models.TextField(blank=True, max_length=100, null=True, unique=True),
        ),
    ]