from django.db import models

class Pipeline(models.Model):
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=50, choices=[('running', 'Running'), ('failed', 'Failed'), ('success', 'Success')])
    created_at = models.DateTimeField(auto_now_add=True)
