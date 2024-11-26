from rest_framework.views import APIView
from rest_framework.response import Response

class MonitoringView(APIView):
    def get(self, request):
        data = {
            "cpu_usage": 50,
            "memory_usage": 2.5,
            "active_pipelines": 5,
        }
        return Response(data)
