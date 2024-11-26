from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PipelineViewSet, MonitoringView

# Création du routeur pour les endpoints RESTful
router = DefaultRouter()
router.register(r'pipelines', PipelineViewSet, basename='pipeline')

urlpatterns = [
    # URL pour accéder à l'interface d'administration Django
    path('admin/', admin.site.urls),
    # Inclusion des routes générées par le routeur
    path('api/', include(router.urls)),
    # URL pour les endpoints JWT (authentification)
    path('api/token/', include('rest_framework_simplejwt.urls')),
    # URL pour le monitoring (vue personnalisée)
    path('api/monitoring/', MonitoringView.as_view(), name='monitoring'),
]
