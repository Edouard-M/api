from django.db import models
from django.contrib.auth.models import User
from colorfield.fields import ColorField

class Tag(models.Model):
    title = models.CharField(null=False, max_length=20)

    color = ColorField(format="hexa", default="#000000")

    def __str__(self):
        return f"Tag : {self.title}"


class Note(models.Model):
    title = models.CharField(null=False, max_length=20)
    code = models.CharField(blank=True, max_length=500)
    description = models.CharField(blank=True, max_length=1000)

    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return f"Note : {self.title}"


class Note_User(User):
    test_field = models.CharField(blank=True, max_length=20)

    #tags = models.ForeignKey(Tag, null=True, on_delete=models.CASCADE)
    #notes = models.ForeignKey(Note,  null=True, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag)
    notes = models.ManyToManyField(Note)

    def __str__(self):
        return f"-{self.username}-"
