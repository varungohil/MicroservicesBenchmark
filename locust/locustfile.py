import time
from locust import constant, HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = constant(1)

    @task
    def get_classlist(self):
        self.client.get("/wrk2-api/classlist")
