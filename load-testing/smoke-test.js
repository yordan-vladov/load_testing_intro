import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '1m', target: 5 }, 
  ],
};

export default () => {
  const urlRes = http.get('http://127.0.0.1:8080');
  sleep(1);

};