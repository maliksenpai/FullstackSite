from .models import Model
from django import forms

class Form(forms.ModelForm):
    class Meta:
        model=Model
        fields=[
            'bir',
            'iki',
            'uc',
        ]