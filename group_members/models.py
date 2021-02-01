from django.db import models


class GroupMember(models.Model):

    manager = "Manager"
    developer = "Developer"
    roles = [
        (manager, "Manager"),
        (developer, "Developer"),
    ]

    role = models.CharField(
        max_length=15,
        choices=roles,
        default=developer,
    )
    user = models.ForeignKey(
        "jwt_auth.User",
        related_name="group",
        on_delete=models.DO_NOTHING,
    )
    project = models.ForeignKey(
        "projects.Project",
        related_name="members",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"User: {self.user.first_name} {self.user.last_name} - Role: {self.role} - Project: {self.project.name}"

    class Meta:
        unique_together = (
            "user",
            "project",
        )

    def is_manager(self):
        return self.role in self.manager
