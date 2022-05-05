from django import forms
from django.shortcuts import render, redirect
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import DbhandlerSerializer, CreateReportSerializer
from .models import Report 

# Create your views here.
class DbhandlerView(generics.ListAPIView):
    queryset = Report.objects.all()
    serializer_class = DbhandlerSerializer

class CreateReportSerializer(APIView):
    serializer_class = CreateReportSerializer

    def post(self, request, format=None):
        #if not self.request.session.exists(self.request.session.session.session_key):
        #        self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            description = serializer.data.get('description')
            author = serializer.data.get('author')
            urgent = serializer.data.get('urgent')
            queryset = Report.objects.filter(title=title)
            if queryset.exists():
                report = queryset[0]
                report.title = title
                report.description = description
                report.author = author
                report.urgent = urgent
            else:
                report = Report(title=title, description=description, author=author, urgent=urgent)
                report.save()
                return Response(DbhandlerSerializer(report).data, status=status.HTTP_202_ACCEPTED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
