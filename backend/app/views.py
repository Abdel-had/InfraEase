from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Pipeline
from .serializers import PipelineSerializer

# Vue pour gérer les pipelines (CRUD)
class PipelineViewSet(viewsets.ModelViewSet):
    queryset = Pipeline.objects.all()
    serializer_class = PipelineSerializer

# Vue pour fournir les données de monitoring
class MonitoringView(APIView):
    def get(self, request):
        # Données simulées pour le monitoring
        data = {
            "cpu_usage": 50,  # % d'utilisation du CPU
            "memory_usage": 2.5,  # Utilisation de la mémoire en GB
            "active_pipelines": 5,  # Nombre de pipelines actifs
        }
        return Response(data)
