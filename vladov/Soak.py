from locust import HttpUser, task, between

class SoakTest(HttpUser):
    wait_time = between(1, 3)

    @task
    def view_homepage(self):
        self.client.get("/")

    @task
    def search_products(self):
        self.client.get("/search?q=shoes")

    @task
    def view_product_details(self):
        self.client.get("/products/1")

    @task
    def add_to_cart(self):
        self.client.post("/cart/add", json={"product_id": 1, "quantity": 1})

    @task
    def view_cart(self):
        self.client.get("/cart") 
