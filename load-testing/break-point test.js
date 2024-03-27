import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const response = http.get('https://api.example.com/data');

  if (response.status >= 200 && response.status < 300) {
    console.log('Request successful');
  } else {
    console.log(`Request failed with status code: ${response.status}`);
  }

  if (__ITER % 100 === 0) {
    console.log('Reached a breakpoint after 100 requests');
    console.log('Pausing for 10 seconds...');
    sleep(10); 
  }
}
