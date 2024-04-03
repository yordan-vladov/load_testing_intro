import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class SmokeTest(unittest.TestCase):
    def setUp(self):
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(10)

    def test_homepage_load(self):
        self.driver.get("https://example.com")
        self.assertTrue("Home" in self.driver.title)

    def test_product_search(self):
        self.driver.get("https://example.com")
        search_box = self.driver.find_element_by_id("search-input")
        search_box.send_keys("shoes" + Keys.RETURN)
        self.assertTrue("Search Results" in self.driver.title)

    def test_product_details_page(self):
        self.driver.get("https://example.com/products/1")
        self.assertTrue("Product Details" in self.driver.title)

    def test_add_to_cart_functionality(self):
        self.driver.get("https://example.com/products/1")
        add_to_cart_button = self.driver.find_element_by_id("add-to-cart")
        add_to_cart_button.click()
        self.assertTrue("Shopping Cart" in self.driver.title)

    def test_checkout_process(self):
        self.driver.get("https://example.com/cart")
        checkout_button = self.driver.find_element_by_id("checkout")
        checkout_button.click()
        self.assertTrue("Checkout" in self.driver.title)

    def tearDown(self):
        self.driver.quit()

if __name__ == "__main__":
    unittest.main()
