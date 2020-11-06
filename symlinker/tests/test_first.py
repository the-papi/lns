from django.test import TestCase


class AnimalTestCase(TestCase):
    def test_first(self):
        self.assertEqual('a', 'a')
        self.assertEqual('a', 'a')
