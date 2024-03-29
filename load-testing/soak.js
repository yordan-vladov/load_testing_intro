import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 100 }, 
    { duration: '8h', target: 100 },
    { duration: '5m', target: 0 }, 
  ],
};

export default () => {
  const urlRes = http.get('http://localhost:8080');
  sleep(1);
};
