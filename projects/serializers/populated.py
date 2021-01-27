from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import ProjectSerializer


class PopulatedProjectSerializer(ProjectSerializer):
    owner = NestedUserSerializer()
