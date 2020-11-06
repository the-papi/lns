from rest_framework import viewsets, mixins

from symlinker.models import URL
from symlinker.serializers import URLSerializer


class URLViewSet(mixins.CreateModelMixin,
                 mixins.RetrieveModelMixin,
                 viewsets.GenericViewSet):
    lookup_field = 'shortened_url_id'
    queryset = URL.objects.all()
    serializer_class = URLSerializer
