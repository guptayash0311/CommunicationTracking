from django.contrib import admin
from .models import Company, CommunicationMethod, CommunicationLog

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("name", "location", "linkedin_profile", "communication_periodicity")
    search_fields = ("name", "location", "linkedin_profile")
    list_filter = ("communication_periodicity",)


@admin.register(CommunicationMethod)
class CommunicationMethodAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "sequence", "mandatory")
    search_fields = ("name",)
    list_filter = ("mandatory",)


@admin.register(CommunicationLog)
class CommunicationLogAdmin(admin.ModelAdmin):
    list_display = ("company", "method", "date")
    search_fields = ("company__name", "method__name")
    list_filter = ("method", "date")
