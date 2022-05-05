from django.db import models

# Create your models here.
class Report(models.Model):
    title = models.CharField(max_length=200, unique=True)
    description = models.CharField(max_length=1024)
    author = models.CharField(max_length=100)
    urgent = models.IntegerField(null=False, default=0)
    # TODO: Add date field
    
    def __str__(self):
        return self.title_text

#   TODO: Add method to recover recently published report
#   def was_published_recently(self):
