import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 800 }, 
    { duration: '3m', target: 2000 }, 
    { duration: '2m', target: 600 },
    { duration: '1m', target: 200 }, 
  ],
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io');
  sleep(1);

};