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