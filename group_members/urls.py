from django.urls import path
from .views import GroupMemberListView

urlpatterns = [
    path("", GroupMemberListView.as_view()),
]
