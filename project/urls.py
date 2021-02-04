from django.contrib import admin
from django.urls import path, include, re_path
from .views import index

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/", include("jwt_auth.urls")),
    path("api/comments/", include("comments.urls")),
    path("api/groups/", include("group_members.urls")),
    path("api/projects/", include("projects.urls")),
    path("api/tickets/", include("tickets.urls")),
    re_path(r"^.*$", index),
]
