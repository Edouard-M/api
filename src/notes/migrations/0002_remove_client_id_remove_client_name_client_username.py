# Generated by Django 4.2.4 on 2023-09-05 12:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client',
            name='id',
        ),
        migrations.RemoveField(
            model_name='client',
            name='name',
        ),
        migrations.AddField(
            model_name='client',
            name='username',
            field=models.CharField(default='null', max_length=20, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
