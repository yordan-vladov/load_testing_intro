import http from 'k6/http';

export let options = {
  stages: [
    { duration: '1m', target: 50 },  // Ramp up to 50 users in 1 minute
    { duration: '3m', target: 50 },  // Hold 50 users for 3 minutes
    { duration: '1m', target: 100 }, // Ramp up to 100 users in 1 minute (spike)
    { duration: '3m', target: 100 }, // Hold 100 users for 3 minutes
    { duration: '1m', target: 50 },  // Ramp down to 50 users in 1 minute
    { duration: '3m', target: 50 },  // Hold 50 users for 3 minutes
    { duration: '1m', target: 0 },   // Ramp down to 0 users in 1 minute
  ],
};

export default function () {
  const url = 'https://test-api.k6.io/auth/basic/login/';
  const payload = JSON.stringify({
    username: 'test_case',
    password: '1234',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
}
