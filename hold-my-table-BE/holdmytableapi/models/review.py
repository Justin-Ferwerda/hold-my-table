"""review model"""
from django.db import models
from .user import User
from .table import Table

class Review(models.Model):
    """review attributes"""

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    table = models.ForeignKey(Table, on_delete=models.CASCADE, related_name='table_reviews')
    rating = models.FloatField()
    content = models.CharField(max_length=240)
    image_url = models.CharField(max_length=100)
