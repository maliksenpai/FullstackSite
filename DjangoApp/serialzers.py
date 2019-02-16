from rest_framework import serializers
from DjangoApp.models import Model
class Serializer(serializers.ModelSerializer):
    class Meta:
        model=Model
        depth = 3
        fields = '__all__'