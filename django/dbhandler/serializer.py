from rest_framework import serializers
from .models import Report

class DbhandlerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('id', 'title', 'description', 'author', 'urgent')

class CreateReportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Report
        fields = ('title', 'description', 'author', 'urgent')
