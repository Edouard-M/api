from django.db import models
from django.contrib.auth.models import User

class Tag(models.Model):
    title = models.CharField(null=False, max_length=20)

    #user = models.CharField(null=True, max_length=20)

    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE, default=123)

    def __str__(self):
        return f"<Tag: {self.title}>"


class Note(models.Model):
    title = models.CharField(null=False, max_length=20)
    code = models.CharField(null=False, max_length=500)
    description = models.CharField(null=True, max_length=1000)

    tags = models.ManyToManyField(Tag)

    #user = models.CharField(null=True, max_length=20)
    user = models.ForeignKey(User, null=False, on_delete=models.CASCADE, default=123)

    def __str__(self):
        return f"<Note: {self.title}, code: {self.code}, description: {self.description}>"
