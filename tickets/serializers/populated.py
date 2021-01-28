from projects.serializers.common import ProjectSerializer
from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import DetailTicketSerializer, TicketSerializer


class PopulatedTicketSerializer(TicketSerializer):
    owner = NestedUserSerializer()
    project = ProjectSerializer()


class PopulatedTicketWithOwnerSerializer(DetailTicketSerializer):
    owner = NestedUserSerializer()
