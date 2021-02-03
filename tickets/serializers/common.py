from rest_framework import serializers
from ..models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = "__all__"


class DetailTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = (
            "id",
            "owner",
            "user_owner",
            "title",
            "types",
            "description",
            "creation_date",
            "status",
            "assigned_user",
            "comments",
        )
