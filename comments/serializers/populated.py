from jwt_auth.serializers.common import NestedUserSerializer
from tickets.serializers.common import DetailTicketSerializer
from ..serializers.common import CommentSerializer, NestedCommentSerializer


class PopulatedNestedCommentSerializer(NestedCommentSerializer):
    owner = NestedUserSerializer()


class PopulatedCommentSerializer(CommentSerializer):

    owner = NestedUserSerializer()
    ticket = DetailTicketSerializer()
