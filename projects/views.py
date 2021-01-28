from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied

from .models import Project
from .serializers.common import ProjectSerializer
from .serializers.populated import (
    PopulatedProjectSerializer,
    PopulatedProjectWithTicketsSerializer,
)


class ProjectListView(APIView):
    def get(self, _request):
        projects = Project.objects.all()
        serialized_project = PopulatedProjectSerializer(projects, many=True)
        return Response(serialized_project.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id
        project_to_create = ProjectSerializer(data=request.data)
        if project_to_create.is_valid():
            project_to_create.save()
            return Response(project_to_create.data, status=status.HTTP_201_CREATED)
        return Response(
            project_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )


class ProjectDetailView(APIView):
    def get_project(self, pk):
        """ returns project from db by its pk(id) or responds 404 not found """
        try:
            return Project.objects.get(pk=pk)
        except Project.DoesNotExist:
            raise NotFound()

    def get(self, _request, pk):
        project = self.get_project(pk=pk)
        serialized_project = PopulatedProjectWithTicketsSerializer(project)
        return Response(serialized_project.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        project_to_update = self.get_project(pk=pk)
        if project_to_update.owner.id != request.user.id:
            raise PermissionDenied()
        updated_project = ProjectSerializer(project_to_update, data=request.data)
        if updated_project.is_valid():
            updated_project.save()
            return Response(updated_project.data, status=status.HTTP_202_ACCEPTED)
        return Response(
            updated_project.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )

    def delete(self, request, pk):
        project_to_delete = self.get_project(pk=pk)
        if project_to_delete.owner.id != request.user.id:
            raise PermissionDenied()
        project_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
