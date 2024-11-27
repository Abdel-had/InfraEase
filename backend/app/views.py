from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pipeline
from .serializers import PipelineSerializer

class PipelineViewSet(viewsets.ModelViewSet):
    queryset = Pipeline.objects.all()
    serializer_class = PipelineSerializer

class MonitoringView(APIView):
    def get(self, request):
        data = {
            "cpu_usage": 50,  # Exemple de données simulées
            "memory_usage": 2.5,  # Utilisation mémoire en GB
            "active_pipelines": 5,  # Nombre de pipelines actifs
        }
        return Response(data)
