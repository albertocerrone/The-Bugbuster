from django.db import models


class Comment(models.Model):
    content = models.TextField(max_length=200)
    creation_date = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="posted_comments",
        on_delete=models.CASCADE,
    )
    ticket = models.ForeignKey(
        "tickets.Ticket",
        related_name="comments",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"Comment:{self.id} on Ticket:{self.ticket} "