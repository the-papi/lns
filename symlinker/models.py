from django.db import models

import random
import string


def random_url_id(length=6):
    return ''.join(
        random.choice(string.ascii_letters + string.digits)
        for _ in range(length)
    )


class URL(models.Model):
    original_url = models.CharField(max_length=4096)
    shortened_url_id = models.CharField(max_length=50, default=random_url_id, unique=True, db_index=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
