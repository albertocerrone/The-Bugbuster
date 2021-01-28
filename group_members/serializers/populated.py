from jwt_auth.serializers.common import NestedUserSerializer
from projects.serializers.common import ProjectSerializer
from ..serializers.common import GroupMemberSerializer


class PopulatedGroupMemberSerializer(GroupMemberSerializer):

    user = NestedUserSerializer(many=True)
    project = ProjectSerializer()
