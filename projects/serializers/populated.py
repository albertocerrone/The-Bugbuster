from jwt_auth.serializers.common import NestedUserSerializer
from group_members.serializers.populated import NestedUserSerializer
from ..serializers.common import ProjectSerializer


class PopulatedProjectSerializer(ProjectSerializer):
    owner = NestedUserSerializer()
    members = NestedUserSerializer(many=True)