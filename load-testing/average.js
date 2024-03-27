import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: '4m', target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: '30m', target: 100 }, // stay at 100 users for 30 minutes
    { duration: '3m', target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  const urlRes = http.get('http://localhost:8080/');
  sleep(2);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};