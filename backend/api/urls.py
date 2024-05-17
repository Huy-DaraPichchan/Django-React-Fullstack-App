from django.urls import path
from .views import *

urlpatterns = [
    path('notes/', NoteListCreate.as_view(), name='note-list'),
    path('notes/delete/<int:pk>/', NoteDelete.as_view(), name='delete-note')
]
