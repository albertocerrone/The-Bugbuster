from django.db import models


class Comment(models.Model):
    content = models.TextField(max_length=200)
    creation_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="created_comments",
        on_delete=models.CASCADE,
        blank=True,
    )
    # ticket = FK

    def __str__(self):
        return f"Comment:{self.id} on Ticket:{self.ticket} "