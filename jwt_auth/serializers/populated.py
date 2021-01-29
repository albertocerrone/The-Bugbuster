from ..serializers.common import UserSerializer
from comments.serializers.common import CommentSerializer


class PopulatedUserSerializer(UserSerializer):

    posted_comments = CommentSerializer(many=True)
    # created_projects = PokemonSerializer(many=True)
    # created_tickets = PokemonSerializer(many=True)
