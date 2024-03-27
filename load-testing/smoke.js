import http from 'k6/http';

export default function () {
  const endpoints = [
    'https://api.example.com/healthcheck',
    'https://api.example.com/login',
    'https://api.example.com/data',
  ];

  endpoints.forEach(endpoint => {
    const response = http.get(endpoint);
    
    if (response.status === 200) {
      console.log(`Smoke test passed for ${endpoint}`);
    } else {
      console.error(`Smoke test failed for ${endpoint}. Status code: ${response.status}`);
    }
  });
}
