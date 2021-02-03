from django.db import models
from django.db.models.deletion import CASCADE


class Ticket(models.Model):
    BUG = "Bug"
    NEW_FEATURE = "New Feature"
    UPDATE_FEATURE = "Update Feature"
    DELETE_FEATURE = "Delete Feature"
    types_of_tickets = [
        (BUG, "Bug"),
        (NEW_FEATURE, "New Feature"),
        (UPDATE_FEATURE, "Update Feature"),
        (DELETE_FEATURE, "Delete Feature"),
    ]
    NEW = "New"
    IN_PROGRESS = "In Progress"
    FEEDBACK = "FeedBack"
    BLOCKED = "Blocked"
    RESOLVED = "Resolved"
    tickets_status = [
        (NEW, "New"),
        (IN_PROGRESS, "In Progress"),
        (FEEDBACK, "Feedback"),
        (BLOCKED, "Blocked"),
        (RESOLVED, "Resolved"),
    ]
    title = models.CharField(max_length=70)
    types = models.CharField(
        max_length=14,
        choices=types_of_tickets,
        default=BUG,
    )
    description = models.TextField(max_length=300)
    creation_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=15,
        choices=tickets_status,
        default=NEW,
        blank=True,
    )
    owner = models.ForeignKey(
        "group_members.GroupMember",
        related_name="created_tickets",
        on_delete=models.DO_NOTHING,
    )
    user_owner = models.ForeignKey(
        "jwt_auth.User",
        related_name="created_tickets",
        on_delete=models.DO_NOTHING,
    )
    project = models.ForeignKey(
        "projects.Project",
        related_name="tickets",
        on_delete=models.CASCADE,
    )
    assigned_user = models.ForeignKey(
        "group_members.GroupMember",
        related_name="tickets",
        on_delete=models.DO_NOTHING,
    )

    def __str__(self):
        return f"{self.title} - {self.project} - {self.status}"
