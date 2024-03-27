import http from 'k6/http';

export let options = {
  stages: [
    { duration: '5m', target: 50 },  // Ramp up to 50 users in 5 minutes
    { duration: '30m', target: 50 }, // Hold 50 users for 30 minutes
    { duration: '5m', target: 0 },   // Ramp down to 0 users in 5 minutes
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
