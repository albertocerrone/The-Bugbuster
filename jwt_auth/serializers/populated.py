from ..serializers.common import UserSerializer
from comments.serializers.common import NestedCommentSerializer


class PopulatedUserSerializer(UserSerializer):

    posted_comments = NestedCommentSerializer(many=True)
    # created_projects = PokemonSerializer(many=True)
    # created_tickets = PokemonSerializer(many=True)
