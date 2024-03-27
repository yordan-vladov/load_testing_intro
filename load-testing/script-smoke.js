import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 3,
  duration: '1m',
};

export default () => {
  const response = http.get('http://localhost:8080'); // Adjust the URL as per your application
  check(response, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
};
