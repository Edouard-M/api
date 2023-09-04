from django.db import models


class Client(models.Model):
    name = models.CharField(null=False, max_length=20)
    email = models.CharField(null=True, max_length=50)
    password = models.CharField(null=False, max_length=50)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"<Client: {self.name}, email={self.email} ({self.created})>"
