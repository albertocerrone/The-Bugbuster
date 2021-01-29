from comments.serializers.populated import PopulatedNestedCommentSerializer
from group_members.serializers.populated import PopulatedUsersMemberSerializer
from projects.serializers.common import ProjectSerializer
from ..serializers.common import DetailTicketSerializer, TicketSerializer


class PopulatedTicketSerializer(TicketSerializer):
    owner = PopulatedUsersMemberSerializer()
    project = ProjectSerializer()
    assigned_user = PopulatedUsersMemberSerializer()
    comments = PopulatedNestedCommentSerializer(many=True)


class PopulatedTicketWithOwnerSerializer(DetailTicketSerializer):
    owner = PopulatedUsersMemberSerializer()
    assigned_user = PopulatedUsersMemberSerializer()
    comments = PopulatedNestedCommentSerializer(many=True)
