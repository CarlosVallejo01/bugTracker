from django.urls import path

from . import views
from .views import DbhandlerView, CreateReportSerializer

urlpatterns = [
    path('reports', DbhandlerView.as_view()),
    path('add_report', CreateReportSerializer().as_view()),
]
