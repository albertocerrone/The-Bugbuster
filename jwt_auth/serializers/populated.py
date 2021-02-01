from comments.serializers.common import NestedCommentSerializer
from group_members.serializers.populated import PopulatedProjectRoleSerializer
from ..serializers.common import UserSerializer


class PopulatedUserSerializer(UserSerializer):

    # posted_comments = NestedCommentSerializer(many=True)
    group = PopulatedProjectRoleSerializer(many=True)
