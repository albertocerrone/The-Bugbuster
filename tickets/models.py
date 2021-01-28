from django.db import models

class Tickets(models.Model):
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    YEAR_IN_SCHOOL_CHOICES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
    ]
    title = models.CharField(max_length=30)
    number = models.PositiveIntegerField(unique=True)
    types = models.CharField(
        max_length=2,
        choices=YEAR_IN_SCHOOL_CHOICES,
        default=FRESHMAN,
    )
    description = models.TextField(max_length=300)
    creation_date = models.DateTimeField(auto_now_add=True)
    # status = models.
    owner = models.ForeignKey(
        'jwt_auth.User',
        related_name='created_ticket',
        on_delete=models.DO_NOTHING,
    )

    def __str__(self):
        return f"{self.number} - {self.title}"

