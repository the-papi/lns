from rest_framework import serializers

from symlinker.models import URL


class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['original_url', 'shortened_url_id']
