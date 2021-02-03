from group_members.serializers.populated import PopulatedUsersMemberSerializer
from tickets.serializers.common import DetailTicketSerializer
from ..serializers.common import CommentSerializer, NestedCommentSerializer
from jwt_auth.serializers.common import NestedUserSerializer


class PopulatedNestedCommentSerializer(NestedCommentSerializer):
    owner = PopulatedUsersMemberSerializer()
    user_owner = NestedUserSerializer()


class PopulatedCommentSerializer(CommentSerializer):
    owner = PopulatedUsersMemberSerializer()
    user_owner = NestedUserSerializer()
    ticket = DetailTicketSerializer()
