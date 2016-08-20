from django import forms
from django.db import models
from notes.models import Notes, Tag

class NoteForm(models.Model):
    class Meta:
        model = Notes
        fields = ('label', 'body', 'tags')

class TagForm(models.Model):
    class Meta:
        model = Tag
        fields = ('label',)


class UploadExcelData(models.Model):
    title = models.CharField(max_length=200)
    month = models.CharField(max_length=200)
    year = models.CharField(max_length=200)
    filedata = models.FileField()

