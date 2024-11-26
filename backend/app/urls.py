from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PipelineViewSet

router = DefaultRouter()
router.register(r'pipelines', PipelineViewSet, basename='pipeline')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', include('rest_framework_simplejwt.urls')),
]
