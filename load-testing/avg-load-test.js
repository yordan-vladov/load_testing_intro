import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '60m', target: 1000 }, 
        { duration: '120m', target: 2000 }, 
        { duration: '60m', target: 1500 },
        { duration: '60m', target: 2000 }, 
      ],
};

export default () => {
  const urlRes = http.get('http://127.0.0.1:8080');
  sleep(1);

};