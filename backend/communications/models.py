from django.db import models
from django.utils.timezone import now


class Company(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, default="Unknown Location")
    linkedin_profile = models.URLField(max_length=500, blank=True, null=True)
    emails = models.TextField(
        help_text="Enter multiple emails separated by commas.", default=""
    )
    phone_numbers = models.TextField(
        help_text="Enter multiple phone numbers separated by commas.", default=""
    )
    comments = models.TextField(blank=True, null=True)
    communication_periodicity = models.IntegerField(
        help_text="Default interval in days for scheduled communications.",
        default=14,  # Default to 2 weeks
    )

    def __str__(self):
        return self.name


class CommunicationMethod(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, default="")
    sequence = models.PositiveIntegerField(default=1)
    mandatory = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class CommunicationLog(models.Model):
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name="communications"
    )
    method = models.ForeignKey(
        CommunicationMethod, on_delete=models.SET_NULL, null=True, related_name="logs"
    )
    date = models.DateField(default=now)  # Allow manual assignment with a default value
    notes = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.method.name} - {self.date}"