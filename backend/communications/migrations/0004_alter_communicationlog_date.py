# Generated by Django 5.0.4 on 2025-01-02 03:08

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('communications', '0003_alter_communicationlog_options_company_comments_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='communicationlog',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
