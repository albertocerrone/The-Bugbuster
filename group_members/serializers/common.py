from rest_framework import serializers
from ..models import GroupMember


class GroupMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMember
        fields = "__all__"


class NestedGroupMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMember
        fields = ("id", "user")
