from tickets.serializers.populated import PopulatedTicketWithOwnerSerializer
from jwt_auth.serializers.common import NestedUserSerializer
from group_members.serializers.populated import NestedUserSerializer
from ..serializers.common import ProjectSerializer
from group_members.serializers.populated import PopulatedUsersMemberSerializer


class PopulatedProjectSerializer(ProjectSerializer):
    owner = NestedUserSerializer()
    members = PopulatedUsersMemberSerializer(many=True)


class PopulatedProjectWithTicketsSerializer(PopulatedProjectSerializer):
    tickets = PopulatedTicketWithOwnerSerializer(many=True)
