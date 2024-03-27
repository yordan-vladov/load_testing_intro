import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '5m', target: 100 }, 

    // Stage 2: Sustained Load
    { duration: '10m', target: 200 }, 

    { duration: '5m', target: 300 }, 

    { duration: '10m', target: 400 },

    { duration: '5m', target: 0 }, 
  ],
};

export default () => {
  const urlRes = http.get('http://localhost:8080/login'); 
  sleep(1);
};
