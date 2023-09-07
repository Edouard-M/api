from django.contrib import admin
from .models import Client, Tag, Note

admin.site.register(Client)
admin.site.register(Tag)
admin.site.register(Note)
