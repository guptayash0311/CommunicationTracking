from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CompanyViewSet, CommunicationMethodViewSet, CommunicationLogViewSet

router = DefaultRouter()
router.register(r'companies', CompanyViewSet)
router.register(r'communication-methods', CommunicationMethodViewSet)
router.register(r'communication-logs', CommunicationLogViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
