import http from 'k6/http';

export let options = {
  stages: [
    { duration: '2m', target: 50 },  // Ramp up to 50 users in 2 minutes
    { duration: '3m', target: 50 },  // Hold 50 users for 3 minutes
    { duration: '2m', target: 0 },   // Ramp down to 0 users in 2 minutes
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
