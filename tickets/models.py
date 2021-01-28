from django.db import models

class Ticket(models.Model):
    BUG = 'BG'
    NEW_FEATURE = 'NF'
    UPDATE_FEATURE = 'UF'
    DELETE_FEATURE = 'DF'
    types_of_tickets = [
        (BUG, 'Bug'),
        (NEW_FEATURE, 'New Feature'),
        (UPDATE_FEATURE, 'Update Feature'),
        (DELETE_FEATURE, 'Delete Feature'),
    ]
    NEW = 'New'
    IN_PROGRESS = 'In Progress'
    FEEDBACK = 'FeedBack'
    BLOCKED = 'Blocked'
    RESOLVED = 'Resolved'
    tickets_status = [
        (NEW, 'New'),
        (IN_PROGRESS, 'In Progress'),
        (FEEDBACK, 'Feedback'),
        (BLOCKED, 'Blocked'),
        (RESOLVED, 'Resolved'),
    ]
    title = models.CharField(max_length=30)
    types = models.CharField(
        max_length=2,
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
        'jwt_auth.User',
        related_name='created_ticket',
        on_delete=models.DO_NOTHING,
        blank=True,
    )

    def __str__(self):
        return f"{self.number} - {self.title}"

