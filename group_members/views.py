from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.common import GroupMemberSerializer
from .models import GroupMember


class GroupMemberListView(APIView):
    """ Controller for get request /types """

    def get(self, _request):
        group_members = GroupMember.objects.all()
        serialized_group_members = GroupMemberSerializer(group_members, many=True)
        return Response(serialized_group_members.data, status=status.HTTP_200_OK)

    def post(self, request):
        group_member_to_create = GroupMemberSerializer(data=request.data)
        if group_member_to_create.is_valid():
            group_member_to_create.save()
            return Response(group_member_to_create.data, status=status.HTTP_201_CREATED)
        return Response(
            group_member_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )
