import http from 'k6/http';

export const options = {
    stages: [
        { duration: '2m', target: 10 },
        { duration: '1m', target: 100 },
        { duration: '2m', target: 100 },
        { duration: '1m', target: 10 },
        { duration: '2m', target: 10 },
    ],
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
