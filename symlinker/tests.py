from django.test import TestCase


class RandomTestCase(TestCase):
    def first_test(self):
        self.assertEqual("a", "a")
        self.assertEqual("a", "b")
