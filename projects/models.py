from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(max_length=250)
    creation_date = models.DateTimeField(auto_now_add=True)
    deadline = models.DateField()
    # to add owner FK

    def __str__(self):
        return f"{self.name}"
