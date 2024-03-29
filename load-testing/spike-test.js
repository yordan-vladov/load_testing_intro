import http from 'k6/http';

export const options = {
    stages: [
        { duration: '5m', target: 1000 }, 
        { duration: '2m', target: 10000 }, 
        { duration: '5m', target: 2000 }, 
        { duration: '3m', target: 20000 }, 
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
}
