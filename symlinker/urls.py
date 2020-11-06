from rest_framework import routers

from symlinker.views import URLViewSet

app_name = 'symlinker'

router = routers.SimpleRouter()
router.register(r'', URLViewSet)

urlpatterns = router.urls
