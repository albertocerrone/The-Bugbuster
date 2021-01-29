from django.db import models


class Project(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(max_length=250)
    creation_date = models.DateTimeField(auto_now_add=True)
    deadline = models.DateField()
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="created_project",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"{self.name}"
