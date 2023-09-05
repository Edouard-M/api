from django.db import models


class Client(models.Model):
    username = models.CharField(primary_key=True, null=False, max_length=20)
    email = models.CharField(null=True, max_length=50)
    password = models.CharField(null=False, max_length=50)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.email:
            return f"<Client: {self.username}, email={self.email} ({self.created})>"
        else:
            return f"<Client: {self.username} ({self.created})>"
