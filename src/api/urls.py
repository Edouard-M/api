from django.contrib import admin
from django.urls import include, path
from .views import index, test

urlpatterns = [
    path('', index, name="index"),
    path('admin/', admin.site.urls),
    path('test/', test, name="test"),
    path('notes/', include("notes.urls")),
]
