from django.urls import path
from .views import RegisterView, LoginView, ProfileView, ProfileDetailView, ProfileListView

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    path("profile/", ProfileView.as_view()),
    path("profiles/", ProfileListView.as_view()),
    path("profile/<int:pk>/", ProfileDetailView.as_view()),
]
