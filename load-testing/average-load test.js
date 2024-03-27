import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '1m', target: 10 },  
    { duration: '3m', target: 10 },  
    { duration: '1m', target: 0 },   
  ],
};

export default function () {
  
  const response = http.get('https://api.example.com/data');

 
  if (response.status === 200) {
    console.log('Request successful');
  } else {
    console.error(`Request failed with status code: ${response.status}`);
  }

  
  sleep(1);
}

