from django.contrib import admin
from .models import Tag, Note, Note_User

admin.site.register(Note_User)
admin.site.register(Tag)
admin.site.register(Note)
