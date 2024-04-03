import unittest
import random

def process_data(data):
    """
    A function to process data. Example function for stress testing.
    """
    
    result = sum(data) / len(data)
    return result

class StressTest(unittest.TestCase):
    def test_stress(self):
        """
        Stress test for the process_data function.
        """
   
        data = [random.randint(1, 100) for _ in range(100000)]

        
        result = process_data(data)

        self.assertTrue(0 <= result <= 100, "Result out of expected range")

if __name__ == '__main__':
    unittest.main()