import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 50 }, 
    { duration: '1m', target: 10 },  
    { duration: '1m', target: 0 },   
  ],
};

export default function() {
  http.get("http://localhost:8080");
  sleep(1);
}
