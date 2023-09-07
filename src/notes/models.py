from django.db import models


class Client(models.Model):
    username = models.CharField(primary_key=True, null=False, max_length=20)
    email = models.EmailField(null=True, max_length=50)
    password = models.CharField(null=False, max_length=50)

    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        if self.email:
            return f"<Client: {self.username}, email={self.email} ({self.created})>"
        else:
            return f"<Client: {self.username} ({self.created})>"


class Tag(models.Model):
    title = models.CharField(null=False, max_length=20)

    client = models.ForeignKey(Client, null=False, on_delete=models.CASCADE)

    def __str__(self):
        return f"<Tag: {self.title}>"


class Note(models.Model):
    title = models.CharField(null=False, max_length=20)
    code = models.CharField(null=False, max_length=500)
    description = models.CharField(null=True, max_length=1000)

    tags = models.ManyToManyField(Tag, null=False)

    def __str__(self):
        return f"<Note: {self.title}, code: {self.code}, description: {self.description}>"
