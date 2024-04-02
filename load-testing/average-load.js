import http from 'k6/http';

export const options = {
    vus: 50, // Брой едновременни потребители
    duration: '5m', // Продължителност на теста
};

export default function () {
    const url = 'http://localhost:8080/login';
    const payload = JSON.stringify({
        email: 'aaa',
        password: 'bbb',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
};
