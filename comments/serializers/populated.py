from group_members.serializers.populated import PopulatedUsersMemberSerializer
from tickets.serializers.common import DetailTicketSerializer
from ..serializers.common import CommentSerializer, NestedCommentSerializer


class PopulatedNestedCommentSerializer(NestedCommentSerializer):
    owner = PopulatedUsersMemberSerializer()


class PopulatedCommentSerializer(CommentSerializer):

    owner = PopulatedUsersMemberSerializer()
    ticket = DetailTicketSerializer()
