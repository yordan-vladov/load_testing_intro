from locust import HttpUser, between, task

class SpikeUser(HttpUser):
    wait_time = between(5, 9) 

    @task
    def spike_load(self):
        self.client.get("/your-endpoint")

    @task
    def normal_load(self):
        self.client.get("/another-endpoint")