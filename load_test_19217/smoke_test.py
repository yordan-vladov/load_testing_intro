import unittest

class SmokeTest(unittest.TestCase):
    def test_addition(self):
        result = 2 + 2
        self.assertEqual(result, 4, "Addition failed")

    def test_subtraction(self):
        result = 5 - 3
        self.assertEqual(result, 2, "Subtraction failed")

    def test_multiplication(self):
        result = 3 * 4
        self.assertEqual(result, 12, "Multiplication failed")

    def test_division(self):
        result = 10 / 2
        self.assertEqual(result, 5, "Division failed")

if __name__ == '__main__':
    unittest.main()