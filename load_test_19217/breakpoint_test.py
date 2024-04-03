import concurrent.futures
import requests

def send_request(url):
    """
    Sends a GET request to the specified URL.
    """
    try:
        response = requests.get(url)
        return response.status_code
    except requests.RequestException as e:
        print(f"Error occurred while sending request to {url}: {e}")
        return None

def breakpoint_test(url, num_requests):
    """
    Simulates a load breakpoint test by sending multiple requests concurrently.
    """
    print("Starting load breakpoint test...")
    with concurrent.futures.ThreadPoolExecutor() as executor:
        # Submit requests
        futures = [executor.submit(send_request, url) for _ in range(num_requests)]

        # Wait for all requests to complete
        concurrent.futures.wait(futures)

        # Get responses
        responses = [future.result() for future in futures if future.result() is not None]

    print("Load breakpoint test completed.")
    return responses

if __name__ == "__main__":
    url = 'https://www.youtube.com/'  # URL to test
    num_requests = 10  # Number of requests for the load breakpoint test

    # Start the load breakpoint test
    responses = breakpoint_test(url, num_requests)

    # Print responses
    print(responses)