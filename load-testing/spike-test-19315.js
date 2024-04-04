import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for spike in this section
  stages: [
    { duration: '1m', target: 2000 }, 
    { duration: '1m', target: 0 }, 
  ],
};

export default () => {
  const urlRes = http.get('https://test-api.k6.io');
  sleep(1);

};
