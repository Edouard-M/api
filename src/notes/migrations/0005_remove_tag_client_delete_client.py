# Generated by Django 4.2.4 on 2023-11-05 18:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0004_remove_note_tag_note_tags'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tag',
            name='client',
        ),
        migrations.DeleteModel(
            name='Client',
        ),
    ]
