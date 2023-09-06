from django.urls import path
from .views import notes, log_in, sign_in, dashboard

urlpatterns = [
    path('', notes, name="notes"),
    path('log-in/', log_in, name="log-in"),
    path('sign-in/', sign_in, name="sign-in"),
    path('dashboard/', dashboard, name="dashboard"),
]
