import time

def perform_operation():
    """
    Simulates the operation to be tested.
    """
 
    print("Performing operation...")
    time.sleep(1) 

def soak_test(duration, interval):
    """
    Executes the operation repeatedly for the specified duration with a given interval.
    """
    start_time = time.time()
    end_time = start_time + duration

    print(f"Soak test started. Duration: {duration} seconds")

    while time.time() < end_time:
        perform_operation()
        time.sleep(interval)

    print("Soak test completed.")

if __name__ == "__main__":
    duration = 60  
    interval = 10   
    soak_test(duration, interval)
