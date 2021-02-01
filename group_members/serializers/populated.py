from jwt_auth.serializers.common import NestedUserSerializer
from projects.serializers.common import ProjectSerializer
from ..serializers.common import GroupMemberSerializer, NestedGroupMemberSerializer


class PopulatedGroupMemberSerializer(GroupMemberSerializer):

    user = NestedUserSerializer()
    project = ProjectSerializer()


class PopulatedUsersMemberSerializer(GroupMemberSerializer):
    """ This Serializer gives back only the user and not the project """

    user = NestedUserSerializer()


class PopulatedProjectRoleSerializer(GroupMemberSerializer):
    project = ProjectSerializer()
