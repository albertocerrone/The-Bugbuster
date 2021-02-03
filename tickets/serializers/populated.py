from comments.serializers.populated import PopulatedNestedCommentSerializer
from group_members.serializers.populated import PopulatedUsersMemberSerializer
from projects.serializers.common import ProjectSerializer
from ..serializers.common import DetailTicketSerializer, TicketSerializer
from jwt_auth.serializers.common import NestedUserSerializer


class PopulatedTicketSerializer(TicketSerializer):
    owner = PopulatedUsersMemberSerializer()
    user_owner = NestedUserSerializer()
    project = ProjectSerializer()
    assigned_user = PopulatedUsersMemberSerializer()
    # comments = PopulatedNestedCommentSerializer(many=True)


class PopulatedTicketWithOwnerSerializer(DetailTicketSerializer):
    owner = PopulatedUsersMemberSerializer()
    user_owner = NestedUserSerializer()
    assigned_user = PopulatedUsersMemberSerializer()
    comments = PopulatedNestedCommentSerializer(many=True)
