from jwt_auth.serializers.common import NestedUserSerializer
from ..serializers.common import TicketSerializer


class PopulatedTicketSerializer(TicketSerializer):
    owner = NestedUserSerializer()
