import unittest

def calculate_average_load(loads):
    """
    Calculates the average load from a list of load values.
    """
    if not loads:
        return 0
    
    total_load = sum(loads)
    average_load = total_load / len(loads)
    return average_load

class TestAverageLoad(unittest.TestCase):
    def test_empty_list(self):
        """
        Test for an empty list of loads.
        """
        loads = []
        result = calculate_average_load(loads)
        self.assertEqual(result, 0, "Average load for an empty list should be 0")

    def test_single_load(self):
        """
        Test for a single load value.
        """
        loads = [50]
        result = calculate_average_load(loads)
        self.assertEqual(result, 50, "Average load for a single load value should be the value itself")

    def test_multiple_loads(self):
        """
        Test for multiple load values.
        """
        loads = [30, 40, 50, 60, 70]
        result = calculate_average_load(loads)
        self.assertEqual(result, 50, "Average load for [30, 40, 50, 60, 70] should be 50")

    def test_negative_loads(self):
        """
        Test for negative load values.
        """
        loads = [-20, -30, -40, -50]
        result = calculate_average_load(loads)
        self.assertEqual(result, -35, "Average load for [-20, -30, -40, -50] should be -35")

    def test_mixed_loads(self):
        """
        Test for a mixture of positive and negative load values.
        """
        loads = [-20, 30, -40, 50]
        result = calculate_average_load(loads)
        self.assertEqual(result, 5, "Average load for [-20, 30, -40, 50] should be 5")

if __name__ == '__main__':
    unittest.main()
