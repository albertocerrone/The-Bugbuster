from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Ticket
from .serializers.common import TicketSerializer
from .serializers.populated import (
    PopulatedTicketSerializer,
)


class TicketListView(APIView):
    def get(self, _request):
        tickets = Ticket.objects.all()
        serialized_ticket = PopulatedTicketSerializer(tickets, many=True)
        return Response(serialized_ticket.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["user_owner"] = request.user.id
        request.data["owner"] = request.user.id
        ticket_to_create = TicketSerializer(data=request.data)
        if ticket_to_create.is_valid():
            ticket_to_create.save()
            return Response(ticket_to_create.data, status=status.HTTP_201_CREATED)
        return Response(
            ticket_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )


class TicketDetailView(APIView):
    def get_ticket(self, pk):
        """ returns ticket from db by its pk(id) or responds 404 not found """
        try:
            return Ticket.objects.get(pk=pk)
        except Ticket.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        ticket = self.get_ticket(pk=pk)
        serialized_ticket = PopulatedTicketSerializer(ticket)
        return Response(serialized_ticket.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        ticket_to_update = self.get_ticket(pk=pk)
        if ticket_to_update.owner.id != request.user.id:
            raise PermissionDenied()
        updated_ticket = TicketSerializer(ticket_to_update, data=request.data)
        if updated_ticket.is_valid():
            updated_ticket.save()
            return Response(updated_ticket.data, status=status.HTTP_202_ACCEPTED)
        return Response(
            updated_ticket.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )

    def delete(self, request, pk):
        ticket_to_delete = self.get_ticket(pk=pk)
        if ticket_to_delete.owner.id != request.user.id:
            raise PermissionDenied()
        ticket_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
