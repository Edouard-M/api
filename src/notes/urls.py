from django.urls import path
from .views import notes, log_in, sign_in, dashboard, logout_user, new_note

urlpatterns = [
    path('', notes, name="notes"),
    path('log-in/', log_in, name="log-in"),
    path('sign-in/', sign_in, name="sign-in"),
    path('log-out/', logout_user, name="log-out"),
    path('dashboard/', dashboard, name="dashboard"),
    path('new_note/', new_note, name="new_note"),
]
